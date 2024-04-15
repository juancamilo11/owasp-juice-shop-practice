import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";

import { Observable } from "rxjs";

import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(["/login"]); // Redirect to login page
      return false;
    }
    if (!this.authService.hasAdminRole()) {
      this.router.navigate(["/home"]); // Redirect to home page
      return false;
    } else {
      // If user is logged in and has admin role then return true
      return true;
    }
  }
}
