import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { DefaultScreenComponent } from './default-screen/default-screen.component';
import { InformationsScreenComponent } from './informations-screen/informations-screen.component';
import { PaymentMethodScreenComponent } from './payment-method-screen/payment-method-screen.component';
import { AuthGuard } from './auth/auth.guard';
import { ParkingTimeScreenComponent } from './parking-time-screen/parking-time-screen.component';


//canActivate: [AuthGuard]
const routes: Routes = [
  { path: '', redirectTo: '/defaultScreen' , pathMatch: 'full'},
  { path: 'login', component: MainContainerComponent},
  { path: 'registerAccount', component: RegisterComponent},
  { path: 'defaultScreen', component: DefaultScreenComponent , canActivate: [AuthGuard]},
  { path: 'registerInformation', component: InformationsScreenComponent},
  { path: 'paymentMethod', component: PaymentMethodScreenComponent, canActivate: [AuthGuard]},
  { path: 'parkingTimeScreen', component: ParkingTimeScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
