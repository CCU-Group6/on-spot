import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MainContainerComponent } from './main-container/main-container.component';



const routes: Routes = [
  { path: '', component: MainContainerComponent},
  { path: 'registerAccount', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
