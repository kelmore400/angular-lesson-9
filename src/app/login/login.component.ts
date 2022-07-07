import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  login: string = '';
  password: string = '';
  error: string = '';

  logIn() {
    if (this.login && this.password) {
      this.authService.loginService(this.login, this.password);
      this.authService.isLoggedIn().then((isAuth) => {
        if (isAuth) {
          this.router.navigate(['moderator']);
        } else {
          this.error = 'Invalid credentials!';
        }
      })
    }
  }

  ngOnInit(): void {
  }

}
