import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemasService {

  constructor(
    private http: HttpClient
  ) { }



  getTemas(){
    return this.http.get('http://localhost:3000/ramo');
  }

    
}
