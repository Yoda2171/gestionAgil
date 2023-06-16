import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app_name';


  cheklogin:boolean = false;
  constructor( private router: Router) { }

  ngOnInit(){
    this.getLogin();
  }

  logout(){
    localStorage.removeItem('Login');
    this.router.navigate(['login']);
    this.getLogin();
  }

  getLogin(){
    
    return this.cheklogin = localStorage.getItem('Login') ? true : false;
    
  }
}
