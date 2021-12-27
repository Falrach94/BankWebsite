using System;

namespace DomainLayer.Modules.UploadSupervisor
{
    public interface IUploadPreviewRead
    {
        string Name { get; }
        int Size { get; }
        DateTime First { get; }
        DateTime Last { get; }

        bool InvalidData { get; }
    }
}