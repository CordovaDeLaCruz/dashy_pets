import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MdbModalRef } from "mdb-angular-ui-kit/modal";
import { CustomerModel } from "src/app/module/models/customer/list/listCustomerModelResponse";

@Component({
  selector: 'app-add-update-customer-modal',
  templateUrl: './add-update-customer-modal.component.html',
  styleUrls: ['./add-update-customer-modal.component.css']
})
export class AddUpdateCustomerModalComponent implements OnInit {

  @Input() customer: CustomerModel | null;
  customerForm: FormGroup;


  constructor(private _modalRef: MdbModalRef<AddUpdateCustomerModalComponent>, private _formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.customerForm = this._formBuilder.group({
      dni: ['', Validators.required],
      nombre1: ['', Validators.required],
      nombre2: [''],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: [''],
      celular: [''],
      fechaNacimiento: [''],
      correo: ['', Validators.email],
      direccion: [''],
      sexo: ['male']
    });
    if (this.customer){
      this.customerForm.patchValue(this.customer)
    }
  }

  submitCustomer() {
    if (this.customerForm.invalid) {
      // Si el formulario no es válido, muestra un mensaje de error o realiza alguna acción
      console.log('El formulario no es válido');
      return;
    }

    // Lógica para guardar los datos del cliente aquí
    const datosCliente = this.customerForm.value;
    console.log('Datos del cliente:', datosCliente);
    // Cerrar el modal después de guardar los datos, si es necesario
    this._modalRef.close();
  }

  closeModal() {
    this._modalRef.close();
  }
}
