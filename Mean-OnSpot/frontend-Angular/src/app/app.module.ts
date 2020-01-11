import { MbscModule } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS, HttpClientJsonpModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatMenuModule, MatIconModule, MatInputModule, MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

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
import { DiscountScreenComponent } from './components/discount-screen/discount-screen.component';
import { PopupScreenComponent } from './components/popup-screen/popup-screen.component';
import { MapComponent } from './components/map/map.component';
import { AgmOverlays } from "agm-overlays";


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
    ConfirmScreenComponent,
    DiscountScreenComponent,
    PopupScreenComponent,
    MapComponent
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
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgmOverlays,
    HttpClientJsonpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCVJFjI_1hipSPAtGzloqu4JKLahI2z6JI'
    })
  ],

  entryComponents: [
    PopupScreenComponent
  ],
  providers: [AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }



