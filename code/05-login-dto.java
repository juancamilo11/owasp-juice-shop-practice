import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import lombok.*;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginDTO {

    @NotBlank(message = "Username is required")
    @Email(message = "Username must be valid")
    @Pattern(regexp = "[a-zA-Z0-9]*", message = "Username must contain only letters and numbers")
    private String username;

    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters long")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$", 
             message = "Password must contain at least one uppercase letter, one lowercase letter, and one number")
    private String password;

}