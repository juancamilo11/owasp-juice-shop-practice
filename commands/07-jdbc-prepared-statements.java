import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class LoginDao {
    private static final String URL = "jdbc:mysql://localhost:3306/users";
    private static final String USER = "user";
    private static final String PASSWORD = "password";

    public static void main(String[] args) {
        String username = "j3c-dev";
        String password = "some-strong-password";

        try (Connection connection = DriverManager.getConnection(URL, USER, PASSWORD)) {
            String sql = "SELECT * FROM usuarios WHERE email = ? AND password = ?";
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            
            preparedStatement.setString(1, username);
            preparedStatement.setString(2, password);

            ResultSet resultSet = preparedStatement.executeQuery();

            if (resultSet.next()) {
                System.out.println("Valid credentials");
                // Do something
            } else {
                System.out.println("Invalid credentials");
                // Return 401 Unauthorized
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
