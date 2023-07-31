import { Component, ViewChild } from '@angular/core';
import { MdbModalRef, MdbModalService  } from 'mdb-angular-ui-kit/modal';
import { AddUpdateCustomerModalComponent } from './add-update-customer-modal/add-update-customer-modal.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  modalRef: MdbModalRef<AddUpdateCustomerModalComponent>;
  constructor(private _modalService: MdbModalService){

  }

  openModal() {
    // const data = {
    //   title: 'Datos desde el componente principal',
    //   content: 'Estos son los datos pasados al modal desde el componente principal.'
    // };

    this.modalRef = this._modalService.open(AddUpdateCustomerModalComponent, {
      ignoreBackdropClick: true, // Evitar que el modal se cierre al hacer clic fuera
      //data: data // Pasar los datos al modal directamente en el objeto de opciones
    });
  }

  closeModal() {
    this.modalRef.close
  }

}
