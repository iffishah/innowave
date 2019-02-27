import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  login(email: string, password: string){

  console.log("email:", email);
  console.log("password:", password);

  if(email === 'iffibisi@hotmail.com' && password === 'abc123'){

   return true;
  }
  else {
  return false;
  }

  }
}
