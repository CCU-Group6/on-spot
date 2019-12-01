import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { DefaultScreenComponent } from './default-screen/default-screen.component';
import { InformationsScreenComponent } from './informations-screen/informations-screen.component';
import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [
  { path: '', redirectTo: '/login' , pathMatch: 'full'},
  { path: 'login', component: MainContainerComponent},
  { path: 'registerAccount', component: RegisterComponent},
  { path: 'defaultScreen', component: DefaultScreenComponent, canActivate: [AuthGuard] },
  { path: 'registerInformation', component: InformationsScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
