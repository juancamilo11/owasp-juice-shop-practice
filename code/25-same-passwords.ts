import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group(
      {
        username: ["", Validators.required],
        password: ["", Validators.required],
        confirmPassword: ["", Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  // Custom validation function to check if passwords match
  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get("password");
    const confirmPasswordControl = formGroup.get("confirmPassword");

    if (passwordControl.value === confirmPasswordControl.value) {
      confirmPasswordControl.setErrors(null);
    } else {
      confirmPasswordControl.setErrors({ mismatch: true });
    }
  }

  // Method to handle form submission
  onSubmit() {
    if (this.registrationForm.valid) {
      // Here you can send the form data to the server
      console.log("Form is valid, send data:", this.registrationForm.value);
    } else {
      // If form is invalid, display an error message
      console.error("Form is invalid, correct errors before submitting");
    }
  }
}
