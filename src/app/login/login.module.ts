import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "./login.component";
/**
 * Login Module
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: LoginComponent
      }
    ])
  ],
  declarations: [LoginComponent]
})
export class LoginModule {}
