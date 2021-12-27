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

    static class CSVEntries
    {
        public const string OrderAccount = "Auftragskonto";
        public const string BookingDate = "Buchungstag";
        public const string ValueDate = "Valutadatum";
        public const string BookingDescription = "Buchungstext";
        public const string Purpose = "Verwendungszweck";
        public const string Target = "Beguenstigter/Zahlungspflichtiger";
        public const string AccountNumber = "Kontonummer";
        public const string BankCode = "BLZ";
        public const string Amount = "Betrag";
        public const string Currency = "Waehrung";
        public const string Info = "Info";

    }

    /// <summary>
    /// Utility class for accessing data files.
    /// </summary>
    public static class InfrastructureUtils
    {
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
