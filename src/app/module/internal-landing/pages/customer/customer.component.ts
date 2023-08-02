import { Component, OnInit, ViewChild } from '@angular/core';
import { MdbModalRef, MdbModalService  } from 'mdb-angular-ui-kit/modal';
import { ToastrService } from 'ngx-toastr';
import { CustomerModel } from 'src/app/module/models/customer/list/listCustomerModelResponse';
import { AddUpdateCustomerModalComponent } from './add-update-customer-modal/add-update-customer-modal.component';
import { CustomerService } from './service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  loading = false;
  listCustomer: CustomerModel[] = []
  selectCustomer: CustomerModel | null
  addCustomer = false
  viewCustomer = false
  editCustomer = false
  modalRef: MdbModalRef<AddUpdateCustomerModalComponent>;

  constructor(private _modalService: MdbModalService, private _customerService: CustomerService, private _toastr: ToastrService){

  }
  ngOnInit(): void {
    this.getListCustomer()
  }

  getListCustomer() {
    this.loading = true
    this._customerService.getListCustomer().subscribe(
      (response) => {
        this.listCustomer = response;
        this.loading = false
      },
      (error) => {
        this.loading = false
        this._toastr.error(error.error.error, "Lista de clientes")
      }
    );
  }

  openModal(customer: CustomerModel | null, addCustomer: boolean, viewCustomer: boolean, editCustomer: boolean) {
    this.selectCustomer = customer
    if(this.selectCustomer != undefined){
      this.selectCustomer.addCustomer = addCustomer
      this.selectCustomer.editCustomer = editCustomer
      this.selectCustomer.viewCustomer = viewCustomer
    }
    
    this.modalRef = this._modalService.open(AddUpdateCustomerModalComponent, {
      ignoreBackdropClick: true
    });
    this.modalRef.component.customer = this.selectCustomer
  }

  closeModal() {
    this.modalRef.close
  }

}
