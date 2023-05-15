import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrearPubComponent } from './crear-pub/crear-pub.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [

  {
    path: '',
    component: NavbarComponent
  },
  {
    path: 'crear-pub',
    component: CrearPubComponent
  }
];

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
