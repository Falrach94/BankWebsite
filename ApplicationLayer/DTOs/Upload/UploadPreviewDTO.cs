using DomainLayer.Modules.UploadSupervisor;
using System;

namespace ApplicationLayer
{
    public class UploadPreviewDTO
    {
        public UploadPreviewDTO(IUploadPreviewRead preview)
        {
            Name = preview.Name;

            if (!preview.InvalidData)
            {
                Count = preview.Size;
                Earliest = preview.First;
                Latest = preview.Last;
            }
            InvalidData = preview.InvalidData;
        }

        public string Name { get; set; }
        public int Count { get; set; }
        public DateTime Earliest { get; set; }
        public DateTime Latest { get; set; }  
        public bool InvalidData { get; set; }
   
    }
}