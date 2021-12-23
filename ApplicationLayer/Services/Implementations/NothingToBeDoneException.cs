using System;
using System.Runtime.Serialization;

namespace ApplicationLayer.Services
{
    [Serializable]
    internal class NothingToBeDoneException : Exception
    {
        public NothingToBeDoneException()
        {
        }

        public NothingToBeDoneException(string message) : base(message)
        {
        }

        public NothingToBeDoneException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected NothingToBeDoneException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}