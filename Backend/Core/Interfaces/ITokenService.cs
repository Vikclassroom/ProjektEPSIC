using Core.Entities.Identitiy;

namespace Core.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
