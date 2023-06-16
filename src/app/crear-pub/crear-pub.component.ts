import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Post } from '../interface/post';
import { TemasService } from '../services/temas.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Ramo } from '../interface/ramos';
import { User } from '../interface/user';

@Component({
  selector: 'app-crear-pub',
  templateUrl: './crear-pub.component.html',
  styleUrls: ['./crear-pub.component.css'],
})
export class CrearPubComponent {
  constructor(
    private postService: PostService,
    private router: Router,
    private temasService: TemasService,
    private fb: FormBuilder
  ) {
    this.formPost = this.fb.group({
      titulo: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      ramo_id: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.getRamos();
    this.getLogin();
    this.getCurretUser();
  }

  formPost: FormGroup;
  cheklogin: boolean = false;
  ramo: Ramo[] = [];
  post: Post[] = [];
  user!: User;

  createPost() {

    if(this.formPost.invalid){
      return this.formPost.markAllAsTouched();
    }

    let fechaactual = new Date();

    
    const usuario=JSON.parse(localStorage.getItem('Login') || '{}').id;
    this.user=usuario.toString();


    const newPost: Post = {
      titulo: this.formPost.value['titulo'],
      body: this.formPost.value['body'],
      ramo_id: this.formPost.value['ramo_id'],
      user_id: this.user,
      fechaCreacion: fechaactual.toLocaleDateString(),
      
    }

    console.log(newPost)

    this.postService.createPosts(newPost)
    .subscribe({
      next: (res: Post) => {
        console.log(res);
        this.router.navigate(['']);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }


  getCurretUser(){

    this.user = JSON.parse(localStorage.getItem('Login') || '{}');
    console.log( this.user);
    return  this.user;
  }

 /*  likes(post: Post) {
    this.postService.updatePost(post).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  } */

  getRamos() {
    this.temasService.getTemas().subscribe({
      next: (res: any) => {
        console.log(res);
        this.ramo = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getLogin() {
    return (this.cheklogin = localStorage.getItem('Login') ? true : false);
  }
}
