import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './core/shared/shared.module';
import { HttpModule, Http } from  '@angular/http';
import { AppComponent } from './app.component';
import { ConfigModule, ConfigLoader } from "ngx-config";
import { configFactory } from "./core/config/config.loader.factory";
import { DashboardModule } from './Application/dashboard/dashboard.module';
import { AppRoutingModule } from "./app.routes";
import {Routes, RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    /*
    ConfigModule.forRoot({
        provide: ConfigLoader,
        useFactory: (configFactory),
        deps: [Http]
    }),
    */
    SharedModule,
    AppRoutingModule,
    DashboardModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
