using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Threading.Tasks;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager) 
        {
            if (!userManager.Users.Any()) {
                var user = new AppUser
                {
                    DisplayName = "Admin",
                    Email = "admin@test.com",
                    UserName = "admin@test.com",
                    Address = new Address 
                    { 
                        FirstName = "Admin",
                        LastName = "MobSolution",
                        Street = "Rue Matthias-Hipp 7",
                        City = "Neuchâtel",
                        State = "NE",
                        Zipcode = "2000"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}
