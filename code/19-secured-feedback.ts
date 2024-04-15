import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-feedback-form",
  templateUrl: "./feedback-form.component.html",
  styleUrls: ["./feedback-form.component.css"],
})
export class FeedbackFormComponent {
  apiUrl = "http://backend.com/feedback";
  feedbackForm: FormGroup;

  public constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.feedbackForm = this.formBuilder.group({
      message: ["", Validators.required],
      rating: ["", Validators.required],
    });
  }

  public handleSendFeedback() {
    if (this.feedbackForm.invalid) {
      console.error("Invalid feedback form");
      return;
    }
    const body = this.feedbackForm.value;
    const token = localStorage.getItem("token"); // Get the token from local storage

    if (!token) {
      console.error("No token found");
      return;
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    });

    this.http.post<any>(this.apiUrl, body, { headers }).subscribe(
      (response) => {
        console.log("Feedback sent successfully", response);
        // Do something
      },
      (error) => {
        console.error("Error sending feedback", error);
        // Handle the error
      }
    );
  }
}
