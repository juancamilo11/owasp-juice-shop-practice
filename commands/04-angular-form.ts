import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  loginForm: FormGroup;

  public constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]*")]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$"),
        ],
      ],
    });
  }

  public onSubmit() {
    if (this.loginForm.invalid) {
      // Show error alert
      return;
    }
    // At this point, the form is valid
    // Post the form data to the server
    console.log(this.loginForm.value);
  }
}
