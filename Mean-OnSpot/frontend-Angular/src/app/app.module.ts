import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MbscModule } from '@mobiscroll/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatMenuModule, MatIconModule, MatInputModule, MatButtonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { RegisterComponent } from './components/register/register.component';
import { DefaultScreenComponent } from './components/default-screen/default-screen.component';
import { PhoneHeaderComponent } from './components/phone-header/phone-header.component';
import { PhoneFooterComponent } from './components/phone-footer/phone-footer.component';
import { InformationsScreenComponent } from './components/informations-screen/informations-screen.component';
import { AuthGuard } from './components/auth/auth.guard';
import { AuthInterceptor } from './components/auth/auth.interceptor';
import { PaymentMethodScreenComponent } from './components/payment-method-screen/payment-method-screen.component';
import { ParkingTimeScreenComponent } from './components/parking-time-screen/parking-time-screen.component';
import { ConfirmScreenComponent } from './components/confirm-screen/confirm-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    RegisterComponent,
    DefaultScreenComponent,
    PhoneHeaderComponent,
    PhoneFooterComponent,
    InformationsScreenComponent,
    PaymentMethodScreenComponent,
    ParkingTimeScreenComponent,
    ConfirmScreenComponent
  ],
  imports: [ 
    MbscModule, 
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
