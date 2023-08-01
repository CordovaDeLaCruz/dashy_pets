import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModelRequest } from 'src/app/module/models/login/loginModelRequest';
import { MenuOption } from 'src/app/module/models/sidebar/sidebarModelResponse';
import { LoginService } from 'src/app/module/services/login/login.service';
import { SidebarService } from 'src/app/module/services/sidebar/sidebar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading = false;
  showPassword: boolean = false;
  loginForm: FormGroup;
  credentials: LoginModelRequest = new LoginModelRequest();

  menuOptionsAll: MenuOption[];
  activeMenuOptions: MenuOption[] = []

  constructor(private _formBuilder: FormBuilder, private _loginService: LoginService, private _router: Router, private _sidebarService: SidebarService) { }

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
    //this._router.navigateByUrl('/internal/Cliente');
    this.loading = true
    if (this.loginForm.valid) {
      this.credentials = this.loginForm.value
      this._loginService.login(this.credentials).subscribe(
        (response) => {
          const token = response.token;
          if (token) {
            localStorage.setItem('token', token);
            this._sidebarService.getMunuOptions().subscribe(
              (response: MenuOption[]) => {
                this.menuOptionsAll = response
                this.menuOptionsAll.forEach(element => {
                  if(element.estadoPermisoApp === "A") this.activeMenuOptions.push(element)
                });
                localStorage.setItem('menu', JSON.stringify(this.activeMenuOptions))
                this._router.navigateByUrl('/internal/Cliente');
                this.loading = false;
              },
              (error) =>{
                this.loading = false;
                console.error('Error al obtener los permisos:', error);
              }
            )
          }
        },
        (error) => {
          this.loading = false;
          console.error('Error de inicio de sesión:', error.message);
        }
      )
    }
  }
}
