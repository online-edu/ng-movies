import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { ServiceWorkerModule } from "@angular/service-worker";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MovieService } from "./movies/movie.service";
import { MovieModule } from "./movies/movie.module";
import { AuthGuard } from "./guards/auth-guard.service";
import { environment } from "environments/environment";

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MovieModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [MovieService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
