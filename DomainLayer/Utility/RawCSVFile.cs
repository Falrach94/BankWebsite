using BankAccountLib.Utility;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace BankAccountLib
{
    /// <summary>
    /// Class representing a CSV-file.
    /// </summary>
    public class RawCSVFile
    {
        public string Name { get; private set; }

        public string Raw { get; private set; }
        public ISet<string> Header { get; }
        public List<Dictionary<string, string>> Data { get; } = new();

        public bool IsValid => Header.Contains(CSVEntries.OrderAccount)
                && Header.Contains(CSVEntries.BookingDate)
                && Header.Contains(CSVEntries.ValueDate)
                && Header.Contains(CSVEntries.BookingDescription)
                && Header.Contains(CSVEntries.Purpose)
                && Header.Contains(CSVEntries.Target)
                && Header.Contains(CSVEntries.AccountNumber)
                && Header.Contains(CSVEntries.BankCode)
                && Header.Contains(CSVEntries.Amount)
                && Header.Contains(CSVEntries.Currency)
                && Header.Contains(CSVEntries.Info);
            

        public int EntryCount => Data.Count;

        public string GetOrderAccount(int i) => Data[i][CSVEntries.OrderAccount];
        public DateTime GetBookingDate(int i) => DateTime.ParseExact(Data[i][CSVEntries.BookingDate], "dd.MM.yy", CultureInfo.InvariantCulture);
        public DateTime GetValueDate(int i) => DateTime.ParseExact(Data[i][CSVEntries.ValueDate], "dd.MM.yy", CultureInfo.InvariantCulture);
        public string GetBookingDescription(int i) => Data[i][CSVEntries.BookingDescription];
        public string GetPurpose(int i) => Data[i][CSVEntries.Purpose];
        public string GetTarget(int i) => Data[i][CSVEntries.Target];
        public string GetAccountNumber(int i) => Data[i][CSVEntries.AccountNumber];
        public string GetBankCode(int i) => Data[i][CSVEntries.BankCode];
        public double GetAmount(int i) => double.Parse(Data[i][CSVEntries.Amount], new CultureInfo("de-DE"));
        public string GetCurrency(int i) => Data[i][CSVEntries.Currency];
        public string GetInfo(int i) => Data[i][CSVEntries.Info];


        /// <summary>
        /// Parses entry with given index.
        /// </summary>
        /// <param name="i"></param>
        /// <returns></returns>
        /// <exception cref="FormatException">Thrown if necessary key was not present in CSV file.</exception>
        public TransactionData GetEntry(int i)
        {
            try
            {
                DateTime bookingDate = default;
                if (Data[i][CSVEntries.BookingDate].Length != 0)
                    bookingDate = GetBookingDate(i);


                return new TransactionData(GetOrderAccount(i),
                                           bookingDate,
                                           GetValueDate(i),
                                           GetPurpose(i),
                                           GetBookingDescription(i),
                                           GetTarget(i),
                                           GetAccountNumber(i),
                                           GetBankCode(i),
                                           GetAmount(i),
                                           GetCurrency(i),
                                           GetInfo(i));
            }
            catch (KeyNotFoundException)
            {
                throw new FormatException($"Entry format does not match expectation!");
            }
        }


        /// <summary>
        /// Creates list with all transaction data entries in this csv file.
        /// </summary>
        /// <param name="ignoreFutureTransactions"></param>
        /// <returns></returns>
        /// <exception cref="FormatException">Thrown if necessary key was not present in CSV file.</exception>
        public IEnumerable<TransactionData> ToTransactionData(bool ignoreFutureTransactions)
        {
            List<TransactionData> result = new();
            for(int i = 0; i < Data.Count; i++)
            {
                var transaction = GetEntry(i);
                if (!ignoreFutureTransactions || transaction.Info != "Umsatz vorgemerkt")
                {
                    result.Add(transaction);
                }
            }
            return result;
        }

        private RawCSVFile(string name, ISet<string> header, List<Dictionary<string, string>> data, string rawTxt) 
        {
            Name = name;
            Header = header;
            Data = data;
            Raw = rawTxt;
        }

        public static RawCSVFile Parse(string txt, string name="default")
        {
            
            var lines = Regex.Split(txt, "\r\n|\r|\n");

            //first line contains header (entry names)
            var headerEntries = lines[0].Replace("\"", "").Split(';');
            List<string> header = new();
            foreach (string entry in headerEntries)
            {
                header.Add(entry);
            }

            List<Dictionary<string, string>> dataList = new();

            //read data lines
            for (int i = 1; i < lines.Length; i++)
            {
                if (lines[i].Length == 0)
                {
                    continue;
                }

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


            return new RawCSVFile(name, new HashSet<string>(header), dataList, txt);
        }

        public static async Task<RawCSVFile> LoadAsync(string name, Stream stream)
        {
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            using StreamReader reader = new(stream, Encoding.GetEncoding(1252));

            string file = await reader.ReadToEndAsync();

            return Parse(file, name);

        }
        public static async Task<RawCSVFile> LoadAsync(string path)
        {
            if(!File.Exists(path))
            {
                throw new FileNotFoundException("CSV File '"+path+"' not found");
            }
            using (var stream = File.OpenRead(path))
            {
                return await LoadAsync(path, stream);
            }
        }

        public string Serialize()
        {
            return $"{Name}:{Raw}";
        }

        public static RawCSVFile Deserialize(string txt)
        {
            var ar = txt.Split(':', 2);
            return Parse(ar[1], ar[0]);
        }

        public override int GetHashCode()
        {
            return Raw.GetHashCode();
        }
        public override bool Equals(object obj)
        {
            return ReferenceEquals(this, obj)
                || obj is RawCSVFile other && other.Raw.Equals(Raw);
        }
    }
}
