import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModelRequest } from 'src/app/module/models/login/loginModelRequest';
import { LoginService } from 'src/app/module/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword: boolean = false;
  loginForm: FormGroup;
  credentials: LoginModelRequest = new LoginModelRequest();

  constructor(private _formBuilder: FormBuilder, private _loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      usuario: ['', Validators.required],
      clave: ['', Validators.required]
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.credentials = this.loginForm.value
       this._loginService.login(this.credentials).subscribe(
        (response) => {        
          console.log(response)
          const token = response.token;
          if (token) {
            localStorage.setItem('token', token);
          }
        },
        (error) => {
          console.error('Error de inicio de sesión:', error.message);
        }
       )

    }
  }
}
