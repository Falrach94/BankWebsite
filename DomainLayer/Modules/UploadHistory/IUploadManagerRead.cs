using DomainLayer.Modules.UploadSupervisor.VOs;
using DomainLayer.Utility;
using System.Collections.Generic;

namespace DomainLayer.Modules.UploadSupervisor
{
    public interface IUploadManagerRead : IEntity
    {
        IEnumerable<UploadSummary> History { get; }
    }
}