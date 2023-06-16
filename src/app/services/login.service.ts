import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient,
  ) { }


  login(user:any){
    return this.http.post('http://localhost:3000/user/login',user);
  }


  getUser(id:number){
    return this.http.get('http://localhost:3000/user/'+id);
  }

  


}
