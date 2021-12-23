using System;
using System.Runtime.Serialization;

namespace ApplicationLayer.Services
{
    [Serializable]
    internal class ProfileNotFoundException : Exception
    {
        public ProfileNotFoundException()
        {
        }

        public ProfileNotFoundException(string message) : base(message)
        {
        }

        public ProfileNotFoundException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected ProfileNotFoundException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}