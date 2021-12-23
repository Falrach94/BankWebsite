using System;
using System.Runtime.Serialization;

namespace BankAccountLib.Data_Objects.Entities
{
    [Serializable]
    internal class InvalidNameException : Exception
    {
        public InvalidNameException()
        {
        }

        public InvalidNameException(string message) : base(message)
        {
        }

        public InvalidNameException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected InvalidNameException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}