import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private http:HttpClient,
  ) { }

  getChat(id:number){
    return this.http.get('http://localhost:3000/chat/'+id);
  }
}
