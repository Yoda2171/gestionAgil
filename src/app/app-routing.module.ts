import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrearPubComponent } from './crear-pub/crear-pub.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  {
    path: '',
    component: NavbarComponent
  },
  {
    path: 'crear-pub',
    component: CrearPubComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  }
];

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
