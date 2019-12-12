import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { DefaultScreenComponent } from './components/default-screen/default-screen.component';
import { InformationsScreenComponent } from './components/informations-screen/informations-screen.component';
import { PaymentMethodScreenComponent } from './components/payment-method-screen/payment-method-screen.component';
import { AuthGuard } from './components/auth/auth.guard';
import { ParkingTimeScreenComponent } from './components/parking-time-screen/parking-time-screen.component';
import { ConfirmScreenComponent } from './components/confirm-screen/confirm-screen.component';
import { DiscountScreenComponent } from './components/discount-screen/discount-screen.component';



//canActivate: [AuthGuard]
const routes: Routes = [
  { path: '', redirectTo: '/defaultScreen' , pathMatch: 'full'},
  { path: 'login', component: MainContainerComponent},
  { path: 'registerAccount', component: RegisterComponent},
  { path: 'registerInformation', component: InformationsScreenComponent},
  { path: 'paymentMethod', component: PaymentMethodScreenComponent },
  { path: 'defaultScreen', component: DefaultScreenComponent , canActivate: [AuthGuard]},
  { path: 'parkingTimeScreen', component: ParkingTimeScreenComponent, canActivate: [AuthGuard]},
  { path: 'confirmScreen', component: ConfirmScreenComponent, canActivate: [AuthGuard]},
  { path: 'discountScreen', component: DiscountScreenComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
