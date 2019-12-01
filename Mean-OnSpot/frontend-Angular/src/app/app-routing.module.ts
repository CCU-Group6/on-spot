import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { DefaultScreenComponent } from './default-screen/default-screen.component';
import { InformationsScreenComponent } from './informations-screen/informations-screen.component';



const routes: Routes = [
  { path: '', component: MainContainerComponent},
  { path: 'registerAccount', component: RegisterComponent},
  { path: 'defaultScreen', component: DefaultScreenComponent},
  { path: 'registerInformation', component: InformationsScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
