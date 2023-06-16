import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../interface/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(
    private loginservice:LoginService,
  ){
    this.getLogin();
  }


  ngOnInit() {
    this.getLogin();
    this.getProfile();
    
  }


  cheklogin:boolean = false;
  user!:User


  getLogin(){
    
    return this.cheklogin = localStorage.getItem('Login') ? true : false;
    
  }
  
  getProfile(){
    const user = localStorage.getItem('Login');
    if(user){
      const userJson = JSON.parse(user);
      console.log(userJson.id);
      this.loginservice.getUser(userJson.id).subscribe(
        (res:any)=>{
          console.log(res);
          this.user = res;
        },
        (err:any)=>{
          console.log(err);
        }
      );
    }
  }


}


