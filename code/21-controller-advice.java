@ControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(YourException.class)
    public ResponseEntity<ErrorResponse> handleYourException(YourException ex) {
        ErrorResponse errorResponse = new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), ex.getMessage());
        return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
