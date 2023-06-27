import { Component } from '@angular/core';
import { User } from '../interface/user';
import { Chat } from '../interface/chat';
import { io } from 'socket.io-client';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  socket: any;
  mensaje: Chat[] = [];
  users: User[] = [];
  selectedUser: User | null = null;
  text: string = '';
  user!: User;

  ngOnInit(): void {
    this.socket = io('http://localhost:3000');
    
    this.getUsers();

    this.socket.on('recMessage', (message: Chat) => {
      this.mensaje.push(message);
    });
  }


  //obtener los mensajes del usuario
  getMensaje(id: any): void {
    fetch('http://localhost:3000/user/' + id+'/mensajes')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.mensaje = data;
      })
      .catch(err => console.error(err));
  }

 

 

  getUsers(): void {
    fetch('http://localhost:3000/user')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.users = data;
      })
      .catch(err => console.error(err));
  }


  sendMessage(): void {
  
    if (this.selectedUser) {
      const message: Chat = {
        user_id: this.selectedUser.id,
        mensaje: this.text,
        fechaCreacion: new Date().toISOString(),
        current_user_id: JSON.parse(localStorage.getItem('Login') || '{}').id,
      };
      console.log(message)
      this.socket.emit('sendMessage', message);
      this.text = '';
    }
  }
  
  selectUser(user: User): void {
    console.log(user)
    this.selectedUser = user;
    this.getMensaje(user.id);
  }

}
