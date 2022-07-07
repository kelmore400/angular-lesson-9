import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  constructor() { }
  private name = '';
  users = [
    {
      login: "Денис", 
      password: "1812",
    },
    {
      login: "Миша", 
      password: "1911",
    }
  ]

  private isAuth = false;

  loginService(login: string, password: string){
    this.isAuth = !!this.users.find((user)=> user.login === login && user.password === password);
    if(this.isAuth){
      this.name = login;
    }
  }

  logoutService(){
    this.isAuth = false;
  }

  getName() {
    return this.name;
  }

  isLoggedIn(){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isAuth)
      }, 200);
    })
  }
}
