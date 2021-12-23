using System;

namespace BankAccountLib
{
    /// <summary>
    /// VO representation of a bank transaction.
    /// </summary>
    public class TransactionData
    {
        public TransactionData() { }
        public TransactionData(string orderAccount, DateTime bookingDate, DateTime valueDate, string purpose, string bookingDescription, string target, string accountNumber, string bankCode, double amount, string currency, string info) 
        {
            OrderAccount = orderAccount;
            BookingDate = bookingDate;
            ValueDate = valueDate;
            Purpose = purpose;
            BookingDescription = bookingDescription;
            Target = target;
            AccountNumber = accountNumber;
            BankCode = bankCode;
            Amount = amount;
            Currency = currency;
            Info = info;
        }


        public string OrderAccount { get; private set; }
        public DateTime BookingDate { get; private set; }
        public DateTime ValueDate { get; private set; }
        public string Purpose { get; private set; }
        public string BookingDescription { get; private set; }
        public string Target { get; private set; }
        public string AccountNumber { get; private set; }
        public string BankCode { get; private set; }
        public double Amount { get; private set; }
        public string Currency { get; private set; }
        public string Info { get; private set; }

        public override bool Equals(object obj)
        {
            if (obj == null) return false;
            if(obj is TransactionData accObj)
            {
                return OrderAccount == accObj.OrderAccount
                    && BookingDate == accObj.BookingDate
                    && ValueDate == accObj.ValueDate
                    && Purpose == accObj.Purpose
                    && BookingDescription == accObj.BookingDescription
                    && Target == accObj.Target
                    && AccountNumber == accObj.AccountNumber
                    && BankCode == accObj.BankCode
                    && Amount == accObj.Amount
                    && Currency == accObj.Currency
                    && Info == accObj.Info;
            }
            return false;

        }
        public override int GetHashCode()
        {
            return OrderAccount.GetHashCode() + BookingDate.GetHashCode() + ValueDate.GetHashCode() + Purpose.GetHashCode() + BookingDescription.GetHashCode()+
                Target.GetHashCode() + AccountNumber.GetHashCode() + BankCode.GetHashCode() + Amount.GetHashCode() + Currency.GetHashCode() + Info.GetHashCode();
        }

        public override string ToString()
        {
            return $"{BookingDate}: \"{Purpose}\", \"{Target}\"";
        }

    }
}