import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MdbModalRef } from "mdb-angular-ui-kit/modal";
import { ToastrService } from "ngx-toastr";
import { CreateVetModelRequest, VetModel } from "src/app/module/models/vet/vet-models";
import { VetService } from "../service/vet.service";
import { SpecialtyService } from "../../specialty/service/specialty.service";
import { SpecialtyModel } from "src/app/module/models/specialty/specialty-models";

@Component({
  selector: 'app-add-update-view-vet-modal',
  templateUrl: './add-update-view-vet-modal.component.html',
  styleUrls: ['./add-update-view-vet-modal.component.css']
})
export class AddUpdateVetModalComponent implements OnInit {
  loading = false;
  @Input() vet: VetModel | null;
  vetForm: FormGroup;
  newVet: CreateVetModelRequest = new CreateVetModelRequest();
  listSpecialty: SpecialtyModel[] = []

  constructor(
    private _modalRef: MdbModalRef<AddUpdateVetModalComponent>,
    private _formBuilder: FormBuilder,
    private _vetService: VetService,
    private _toastr: ToastrService,
    private _specialtyService: SpecialtyService) {

  }
  ngOnInit(): void {
    this.vetForm = this._formBuilder.group({
      dni: ['', Validators.required],
      nombre1: ['', Validators.required],
      nombre2: [''],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: [''],
      celular: [''],
      fechaNacimiento: [''],
      correo: ['', Validators.email],
      direccion: [''],
      sexo: ['M'],
      usuario: [''],
      idEspecialidad: ['']
    });

    this.getListSpecialty()

    if (this.vet) {
      this.vet.fechaNacimiento = this.vet.fechaNacimiento.substring(0, 10);
      if (this.vet.viewVet)
        this.vet.sexo = this.vet.sexo === "M" ? "Masculino" : "Femenino";
      this.vetForm.patchValue(this.vet)
    }
  }

  getListSpecialty() {
    this.loading = true
    this._specialtyService.getListSpecialty().subscribe(
      (response) => {
        this.listSpecialty = response;
        this.vetForm.patchValue({
          idEspecialidad: this.listSpecialty[0].idEspecialidad
        });
        this.loading = false
      },
      (error) => {
        this.loading = false
        this._toastr.error(error.error.error, "Lista de Especialidades")
      }
    );
  }

  regiterVet() {
    this.loading = true
    if (this.vetForm.valid) {
      this._vetService.postVet(this.vetForm.value).subscribe(
        (response) => {
          this.loading = false
          this._toastr.success(response.message, "Registrar veterinario")
          this._modalRef.close();
        },
        (error) => {
          this.loading = false;
          this._toastr.error(error.message, "Registrar veterinario")
          this._modalRef.close();
        }
      )
    }
  }

  updateVet() {
    this.loading = true
    if (this.vetForm.valid) {
      if (this.vet) {
        this.vet.dni = this.vetForm.value.dni
        this.vet.nombre1 = this.vetForm.value.nombre1
        this.vet.nombre2 = this.vetForm.value.nombre2
        this.vet.apellidoPaterno = this.vetForm.value.apellidoPaterno
        this.vet.apellidoMaterno = this.vetForm.value.apellidoMaterno
        this.vet.celular = this.vetForm.value.celular
        this.vet.fechaNacimiento = this.vetForm.value.fechaNacimiento
        this.vet.correo = this.vetForm.value.correo
        this.vet.direccion = this.vetForm.value.direccion
        this.vet.sexo = this.vetForm.value.sexo
        this.vet.usuario = this.vetForm.value.usuario
        this.vet.idEspecialidad = this.vetForm.value.idEspecialidad
        this._vetService.patchVet(this.vet).subscribe(
          (response) => {
            this.loading = false
            this._toastr.success(response.message, "Actualizar Veterinario")
            this._modalRef.close();
          },
          (error) => {
            this.loading = false;
            this._toastr.error(error.message, "Actualizar Veterinario")
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
