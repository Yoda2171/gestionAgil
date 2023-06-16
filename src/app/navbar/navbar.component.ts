import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../interface/post';
import { User } from '../interface/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  cheklogin: boolean = false;

  post: Post[] = [];
  userfoto: User[] = [];

  constructor(
    private router: Router,
    private postService: PostService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.getLogin();
    this.getallPosts();
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
       
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  














}
