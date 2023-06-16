import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Data, User } from '../interface/user';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formlogin: FormGroup;

  user: User[] = [];
  cheklogin: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.formlogin = this.fb.group({
      correo: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.getLogin();
  }

  login() {
    if (this.formlogin.invalid) {
      return this.formlogin.markAllAsTouched();
    }

    const user: User = {
      correo: this.formlogin.value['correo'],
      password: this.formlogin.value['password'],
    };

    console.log(user);
    this.loginService.login(user).subscribe({
      next: (data: Data) => {
        if (!data.success) {
          return alert('Usuario o contraseña incorrectos');
        }

        console.log(data);
        localStorage.setItem('Login', JSON.stringify(data.data));
        this.getLogin();
        this.router.navigate(['/profile']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getLogin() {
    console.log(this.login);
    return (this.cheklogin = localStorage.getItem('Login') ? true : false);
  }
}
