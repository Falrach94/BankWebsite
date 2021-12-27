using DomainLayer.Modules.UploadSupervisor.VOs;
using System;

namespace ApplicationLayer
{
    public class UploadSummaryDTO
    {
        public string Name { get; set; }      
        public int TotalNumber { get; set; }
        public int NewlyAdded { get; set; } 
        public DateTime Earliest { get; set; }  
        public DateTime Latest { get; set; }
        public UploadState Code { get; set; }

        public UploadSummaryDTO(UploadSummary summary)
        {
            Name = summary.Name; 
            TotalNumber = summary.Size;
            Latest = summary.Last;
            Earliest = summary.First;
            NewlyAdded = summary.UsefullCount;
            Code = summary.UploadStatus;
        }
    }
}