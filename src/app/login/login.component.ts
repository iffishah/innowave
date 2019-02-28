import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

	loginForm: FormGroup;
	loginStatus = true;
	public value: Date = new Date();
	constructor(private _router: Router, private _authService:AuthService) { }

	ngOnInit() { this.initLoginForm(); }
	
	initLoginForm() {
		this.loginForm = new FormGroup({
		  email: new FormControl(null, [Validators.required, Validators.email]),
		  password: new FormControl(null, Validators.required),
		});
	}

	login() {
		const formData =  this.loginForm.value;
		const email = formData.email;
		const password = formData.password;

		const res = this._authService.login(email,password); 
		console.log("res :", res)

		if(res == false){this.loginStatus=false;}
		else if(res == true){this._router.navigate(['/home/shows']);}
	}
  
}

