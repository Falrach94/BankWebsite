using System;
using System.Runtime.Serialization;

namespace ApplicationLayer.Services.Implementations
{
    [Serializable]
    public class AuthentificationFailedException : Exception
    {
        public AuthentificationFailedException()
        {
        }

        public AuthentificationFailedException(string message) : base(message)
        {
        }

        public AuthentificationFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected AuthentificationFailedException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}