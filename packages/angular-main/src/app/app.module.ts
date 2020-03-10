import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule, CoreService } from '@lpm/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import {NgIdleModule} from '@ng-idle/core';
import { AdministratorModule } from './modules/administrator/administrator.module';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    OverlayModule,
    SharedModule,
    HomeModule,
    HttpClientModule,
    NgIdleModule.forRoot(),
    AdministratorModule
  ],
  providers: [
    CoreService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
