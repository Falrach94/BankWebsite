﻿using System;
using System.Runtime.Serialization;

namespace BankAccountLib.Data_Objects.Entities
{
    [Serializable]
    internal class NameAlreadyUsedException : Exception
    {
        public NameAlreadyUsedException()
        {
        }

        public NameAlreadyUsedException(string message) : base(message)
        {
        }

        public NameAlreadyUsedException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected NameAlreadyUsedException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}