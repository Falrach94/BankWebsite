using System;
using System.Runtime.Serialization;

namespace BankAccountLib.Classification
{
    [Serializable]
    internal class StateInvalidException : Exception
    {
        public StateInvalidException()
        {
        }

        public StateInvalidException(string message) : base(message)
        {
        }

        public StateInvalidException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected StateInvalidException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}