import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import lombok.*;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SearchDTO {
    
    @Pattern(regexp = "^[a-zA-Z0-9]*$", message = "Search param must contain only letters and numbers")
    private String search;

}