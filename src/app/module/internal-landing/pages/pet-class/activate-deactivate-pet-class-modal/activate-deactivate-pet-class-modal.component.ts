import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MdbModalRef } from "mdb-angular-ui-kit/modal";
import { ToastrService } from "ngx-toastr";
import { PetClassModel } from "src/app/module/models/pet-class/pet-class-models";
import { PetClassService } from "../service/pet-class.service";

@Component({
  selector: 'app-activate-deactivate-pet-class-modal',
  templateUrl: './activate-deactivate-pet-class-modal.component.html',
  styleUrls: ['./activate-deactivate-pet-class-modal.component.css']
})
export class ActivateDeactivatePetClassModalComponent implements OnInit {
  loading = false;
  @Input() petClass: PetClassModel | null;

  constructor(
    private _modalRef: MdbModalRef<ActivateDeactivatePetClassModalComponent>,
    private _petClassService: PetClassService,
    private _toastr: ToastrService) {

  }
  ngOnInit(): void {

  }

  activateDeactivatePetClass() {
    this.loading = true
    if(this.petClass){
      if(this.petClass.estadoClaseMascota == "A"){
        this.petClass.estadoClaseMascota = "I"
        this._petClassService.patchPetClass(this.petClass).subscribe(
          (response) => {
            this.loading = false
            this._toastr.success(response.message, "Inactivar Clase de Mascota")
            this._modalRef.close();
          },
          (error) => {
            this.loading = false;
            this._toastr.error(error.message, "Inactivar Clase de Mascota")
            this._modalRef.close();
          }
        )
      }else{
        this.petClass.estadoClaseMascota = "A"
        this._petClassService.patchPetClass(this.petClass).subscribe(
          (response) => {
            this.loading = false
            this._toastr.success(response.message, "Activar Clase de Mascota")
            this._modalRef.close();
          },
          (error) => {
            this.loading = false;
            this._toastr.error(error.message, "Activar Clase de Mascota")
            this._modalRef.close();
          }
        )
      }
    }
  }

  closeModal() {
    this._modalRef.close();
  }
}
