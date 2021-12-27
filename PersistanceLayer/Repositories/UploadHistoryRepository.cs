using DomainLayer.Modules.Grouping.Data_Objects.Entities;
using DomainLayer.Repositories;
using BankAccountLib;
using BankAccountLib.Data_Objects.Entities;
using BankAccountLib.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebBackend.Account_Domain_Model.Data_Objects;
using DomainLayer.Modules.UploadSupervisor;

namespace AggregateDatabase.Repositories
{
    public class UploadHistoryRepository : IUploadHistoryRepository
    {
        private readonly DatabaseContext _dc;

        public UploadHistoryRepository(DatabaseContext dc)
        {
            _dc = dc;
        }

        public async Task AddUploadManager(UploadManager history, User user)
        {
            var entity = await _dc.UploadHistories.AddAsync(history);

            entity.Property("UserId").CurrentValue = user.Id;

        }

        public async Task<UploadManager> GetByUserIdAsync(Guid userId)
        {
            var timestamp = DateTime.Now;

            var uploadManager = await _dc.UploadHistories.FirstOrDefaultAsync(p => EF.Property<Guid>(p, "UserId") == userId);

            Console.WriteLine("[UH-GetByUserId] SQL-Query: " + (DateTime.Now - timestamp).TotalMilliseconds + " ms");

            var tpNavigator = _dc.Entry(uploadManager).Navigation("_transactionsProfile");

            await tpNavigator.LoadAsync();
            Console.WriteLine("[UH-GetByUserId] SQL-Query (_transactionsProfile): " + (DateTime.Now - timestamp).TotalMilliseconds + " ms");
            timestamp = DateTime.Now;

            var tpEntry = _dc.Entry(uploadManager).Reference("_transactionsProfile").TargetEntry;

            await tpEntry.Navigation("_groupingProfile").LoadAsync();
            Console.WriteLine("[UH-GetByUserId] SQL-Query (_groupingProfile): " + (DateTime.Now - timestamp).TotalMilliseconds + " ms");
            timestamp = DateTime.Now;

            return uploadManager;
        }

        public async Task SaveAsync()
        {
            await _dc.SaveChangesAsync();
        }
    }
}
