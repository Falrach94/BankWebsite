using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace BankAccountLib
{
    /// <summary>
    /// Class representing a CSV-file.
    /// </summary>
    public class RawCSVFile
    {
        public ISet<string> Header { get; }

        public List<Dictionary<string, string>> Data { get; } = new();

        private RawCSVFile(ISet<string> header, List<Dictionary<string, string>> data) 
        {
            Header = header;
            Data = data;
        }

        public static async Task<RawCSVFile> LoadAsync(Stream stream)
        {
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            using StreamReader reader = new(stream, Encoding.GetEncoding(1252));

            List<string> lines = new();

            string nextLine;

            while((nextLine = await reader.ReadLineAsync()) != null)
            {
                lines.Add(nextLine);
            }

            //first line contains header (entry names)
            var headerEntries = lines[0].Replace("\"", "").Split(';');
            List<string> header = new();
            foreach (string entry in headerEntries)
            {
                header.Add(entry);
            }

            List<Dictionary<string, string>> dataList = new();

            //read data lines
            for (int i = 1; i < lines.Count; i++)
            {
                Dictionary<string, string> dataDic = new();

                var data = lines[i].Replace("\"", "").Split(';');
                if (header.Count != data.Length)
                {
                    throw new FormatException($"Line {i} does not match header line!");
                }
                for (int j = 0; j < data.Length; j++)
                {
                    dataDic.Add(header[j], data[j]);
                }
                dataList.Add(dataDic);
            }


            return new RawCSVFile(new HashSet<string>(header), dataList);

        }

        public static async Task<RawCSVFile> LoadAsync(string path)
        {
            if(!File.Exists(path))
            {
                throw new FileNotFoundException("CSV File '"+path+"' not found");
            }
            using (var stream = File.OpenRead(path))
            {
                return await LoadAsync(stream);
            }
        }
    }
}
