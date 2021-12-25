using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace BankAccountLib.Utility
{
    /// <summary>
    /// Utility class for accessing data files.
    /// </summary>
    public static class InfrastructureUtils
    {
        /// <summary>
        /// Creates transaction from csv dictionary.
        /// </summary>
        /// <param name="entryDic"></param>
        /// <returns></returns>
        private static TransactionData LoadTransactionEntry(Dictionary<string, string> entryDic)
        {
            try
            {
                var orderAccount = entryDic["Auftragskonto"];
                DateTime bookingDate = default;
                if(entryDic["Buchungstag"].Length != 0)
                    bookingDate = DateTime.ParseExact(entryDic["Buchungstag"],"dd.MM.yy", CultureInfo.InvariantCulture);
                var valueDate = DateTime.ParseExact(entryDic["Valutadatum"], "dd.MM.yy", CultureInfo.InvariantCulture);
                var bookingDescription = entryDic["Buchungstext"];
                var purpose = entryDic["Verwendungszweck"];
                var target = entryDic["Beguenstigter/Zahlungspflichtiger"];
                var accountNumber = entryDic["Kontonummer"];
                var bankCode = entryDic["BLZ"];
                var amount = double.Parse(entryDic["Betrag"], new CultureInfo("de-DE"));
                var currency = entryDic["Waehrung"];
                var info = entryDic["Info"];

                return new TransactionData(orderAccount, bookingDate, valueDate, purpose, bookingDescription, target, accountNumber, bankCode, amount, currency, info);
            }
            catch (KeyNotFoundException)
            {
                throw new FormatException($"Entry format does not match expectation!");
            }
        }

        /// <summary>
        /// Creates all transactions stored in a RawCSVFile.
        /// </summary>
        /// <param name="file"></param>
        /// <param name="ignoreFutureTransactions"></param>
        /// <returns></returns>
        public static List<TransactionData> LoadTransactionsFromFile(RawCSVFile file, bool ignoreFutureTransactions)
        {
            var list = new List<TransactionData>();

            foreach (var entry in file.Data)
            {
                var e = LoadTransactionEntry(entry);
                if (!ignoreFutureTransactions || e.Info != "Umsatz vorgemerkt")
                {
                    list.Add(e);
                }
            }

            return list;
        }  
        public static List<TransactionData> LoadTransactionsFromFile(string path, bool ignoreFutureTransactions)
        {
            var file = RawCSVFile.LoadAsync(path);
            file.Wait();
            return LoadTransactionsFromFile(file.Result, ignoreFutureTransactions);
        }
        /// <summary>
        /// Loads TransactionGroup objects from XML-file.
        /// </summary>
        /// <param name="path">file path</param>
        /// <returns>loaded TransactionGroup objects</returns>
        /// <exception cref ="FileNotFoundException"></exception>
        public static IEnumerable<TransactionGroup> LoadGroupsFromFile(string path)
        {
            if (!File.Exists(path))
            {
                throw new FileNotFoundException($"File with path '{path}' not found!");
            }
            using (var stream = new FileStream(path, FileMode.OpenOrCreate))
            {
                XmlSerializer serializer = new(typeof(IEnumerable<TransactionGroup>));
                return (IEnumerable<TransactionGroup>)serializer.Deserialize(stream);
            }
        }

        /// <summary>
        /// Saves given TransactionGroup collection in xml-file.
        /// </summary>
        /// <param name="path">file path</param>
        /// <param name="groups">collection of TransactionGroup objects</param>
        public static void SaveGroupsToFile(string path, IEnumerable<TransactionGroup> groups)
        {

            using (var stream = new FileStream(path, FileMode.OpenOrCreate))
            {
                XmlSerializer serializer = new(groups.GetType());
                serializer.Serialize(stream, groups);
            }
        }
    }
}
