using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dtos
{
    public class RegisterDto
    {
        [Required]
        public string DisplayName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [RegularExpression("(?= ^.{6, 10}$)(?=.*\\d)(?=.*[a - z])(?=.*[A - Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\\s).*$", ErrorMessage = "Le mot de passe doit contenir 1 lettre majuscule, 1 lettre minuscule, 1 nombre, 1 caractère spécial et au moins 6 caractère")]
        public string Password { get; set; }
    }
}
