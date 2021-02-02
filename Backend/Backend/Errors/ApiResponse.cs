using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string message = null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMessageForStatusCode(statusCode);
        }

        public int StatusCode { get; set; }
        public string Message { get; set; }

        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "Une mauvaise requête, tu as fait",
                401 => "Autorisé, tu n'est pas",
                404 => "Une ressource trouvé, ce n'était pas",
                500 => "Daaaaaaaaaaaaaaaamn.... that's a black hole",
                _ => null
            };
        }
    }
}
