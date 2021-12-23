using BankAccountLib;
using BankAccountLib.Transactions.Filter;
using System;

namespace ApplicationLayer.DTOs
{
    public class TransactionDTO
    {
        public TransactionDTO(IClassifiedTransaction t)
        {
            Date = t.Data.BookingDate;
            Purpose = t.Data.Purpose;
            Target = t.Data.Target;
            Amount = (float)t.Data.Amount;
            GroupId = (t.Group is null) ? Guid.Empty : t.Group.Id;
            Id = t.Id;
        }

        public Guid Id { get; set; }
        public DateTime Date { get; set; }
        public string Purpose { get; set; }
        public string Target { get; set; }
        public float Amount { get; set; }

        public Guid GroupId { get; set; }
    }
}