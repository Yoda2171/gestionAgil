import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../interface/post';
import { User } from '../interface/user';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Comentario } from '../interface/comentario';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit{
  cheklogin: boolean = false;
  post: Post[] = [];
  user!: User;
  posteo!: Post;
  comentario: Comentario[] = [];

  constructor(
    private router: Router,
    private postService: PostService,
    private loginService: LoginService,
    private fb: FormBuilder
  ) {
    this.formComentario = this.fb.group({
      comentario: new FormControl('', [Validators.required]),
    });
  }
  
  formComentario: FormGroup;

  ngOnInit() {
    this.getLogin();
    this.getallPosts();
  }

  createComentario(id: any) {
    if(this.formComentario.invalid){
      return this.formComentario.markAllAsTouched();
    }

    let fechaactual = new Date();

    const usuario= JSON.parse(localStorage.getItem('Login') || '{}').id;
    
    const newComentario : Comentario = {
      comentario: this.formComentario.value['comentario'],
      fechaCreacion: fechaactual.toLocaleDateString(),
      user_id: usuario.toString(),
      post_id: id.toString(),
    };

    console.log(newComentario);

    this.postService.createComentario(id,newComentario).subscribe({
      next: (res: any) => {
        console.log(res);
        this.formComentario.reset();
        this.getallPosts();
        
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }


  logout() {
    localStorage.removeItem('Login');
    this.router.navigate(['login']);
  }

  getLogin() {
    return (this.cheklogin = localStorage.getItem('Login') ? true : false);
  }

  getallPosts() {
    this.postService.getPosts().subscribe({
      next: (res: any) => {
        console.log(res);
        this.post = res;
       
  
        /* this.getALLComentarios() */
       
      },
      error: (err: any) => {
        console.log(err);
      },
    });

   
  }


 
    


















}
