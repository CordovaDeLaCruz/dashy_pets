import { Component, Input } from "@angular/core";
import { MdbModalRef } from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-add-update-customer-modal',
  templateUrl: './add-update-customer-modal.component.html',
  styleUrls: ['./add-update-customer-modal.component.css']
})
export class AddUpdateCustomerModalComponent {

  //@Input() data: any; // Recibe los datos del componente principal

  constructor(private modalRef: MdbModalRef<AddUpdateCustomerModalComponent>) {}

  closeModal() {
    this.modalRef.close();
  }
}
