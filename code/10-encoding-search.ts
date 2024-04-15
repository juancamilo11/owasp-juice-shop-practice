import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
  selector: "app-product-query",
  templateUrl: "./product-query.component.html",
  styleUrls: ["./product-query.component.css"],
})
export class ProductQueryComponent implements OnInit {
  public query: string = "";

  public constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  searchProducts() {
    // Encode the query string to be used in the query parameters of URL
    const encodedQuery = encodeURIComponent(this.query);

    // Build the query parameters
    const params = new HttpParams().set("q", encodedQuery);

    // Make the HTTP GET request
    this.http.get("/rest/products/search", { params }).subscribe(
      (data) => {
        // Handle the data from the response
        console.log(data);
        // Do something with the data
      },
      (error) => {
        // Handle the error from the response
        console.error("Request error:", error);
      }
    );
  }
}
