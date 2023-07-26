import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor o realizar la autenticación
      console.log(this.loginForm.value);
    } else {
      // El formulario es inválido, realiza alguna acción o muestra mensajes de error si es necesario
    }
  }
}
