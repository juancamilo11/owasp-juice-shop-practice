import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private apiUrl = "http://backend-url.com";

  constructor(private http: HttpClient) {}

  getCartItems(): Observable<any> {
    // Get the token from LocalStorage
    const token = localStorage.getItem("token");

    // Verify if the token is present
    if (token) {
      // Build the headers with the token
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      // Make the GET request with the headers
      return this.http.get<any>(this.apiUrl, { headers });
    } else {
      // If the token is not present, log an error and return null
      console.error("Token not found!");
      return null;
    }
  }
}
