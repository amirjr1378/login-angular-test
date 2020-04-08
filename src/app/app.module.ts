import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routing } from './modules/app-routing/appRouting.module';
import { JWT } from './modules/jwt/jwt/jwt.module';
import { LoginComponent } from './layouts/public/login/login.component';
import { MaterialModule } from './material-module';
import { AdminComponent } from './layouts/private/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, LoginComponent, AdminComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JWT,
    Routing,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
