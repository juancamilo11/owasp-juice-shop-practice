import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdministrationComponent } from "./administration/administration.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: "administration",
    component: AdministrationComponent,
    canActivate: [AuthGuard],
  },
  // Other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
