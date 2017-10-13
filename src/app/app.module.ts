import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieService } from "./movies/movie.service";
import { MovieModule } from "./movies/movie.module";
import { AuthGuard } from "./auth/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [        
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MovieModule
  ],
  providers: [MovieService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
