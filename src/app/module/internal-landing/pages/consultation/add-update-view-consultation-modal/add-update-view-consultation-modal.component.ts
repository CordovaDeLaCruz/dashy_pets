import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MdbModalRef } from "mdb-angular-ui-kit/modal";
import { ToastrService } from "ngx-toastr";
import { VetService } from "../../vet/service/vet.service";
import { CreateConsultationModelRequest, ConsultationModel } from "src/app/module/models/consultation/consultation-models";
import { ConsultationService } from "../service/consultation.service";
import { PetService } from "../../pet/service/pet.service";
import { VetModel } from "src/app/module/models/vet/vet-models";
import { PetModel } from "src/app/module/models/pet/pet-models";
import { DiseaseService } from "../../disease/service/disease.service";
import { DiseaseModel } from "src/app/module/models/disease/disease-models";

@Component({
  selector: 'app-add-update-view-consultation-modal',
  templateUrl: './add-update-view-consultation-modal.component.html',
  styleUrls: ['./add-update-view-consultation-modal.component.css']
})
export class AddUpdateViewConsultationModalComponent implements OnInit {
  loading = false;
  @Input() consultation: ConsultationModel | null;
  consultationForm: FormGroup;
  newConsultation: CreateConsultationModelRequest = new CreateConsultationModelRequest();
  listVet: VetModel[] = []
  listDisease: DiseaseModel[] = []
  listPet: PetModel[] = []

  constructor(
    private _modalRef: MdbModalRef<AddUpdateViewConsultationModalComponent>,
    private _formBuilder: FormBuilder,
    private _consultationService: ConsultationService,
    private _toastr: ToastrService,
    private _vetService: VetService,
    private _petService: PetService,
    private _diseaseService: DiseaseService) {

  }
  ngOnInit(): void {
    this.consultationForm = this._formBuilder.group({
      idVeterinario: ['', Validators.required],
      idMascota: ['', Validators.required],
      idEnfermedad: ['', Validators.required],
      fechaConsulta: ['', Validators.required],
      fechaProximaConsulta: [''],
      diagnostico: [''],
      tratamiento: [''],
      observaciones: ['']
    });

    this.getListVet()
    this.getListDisease()
    this.getListPet()

    if (this.consultation) {
      this.consultation.fechaConsulta = this.consultation.fechaConsulta.substring(0, 10);
      this.consultation.fechaProximaConsulta = this.consultation.fechaProximaConsulta.substring(0, 10);
      this.consultationForm.patchValue(this.consultation)
    }
  }

  getListVet() {
    this.loading = true
    this._vetService.getListVet().subscribe(
      (response) => {
        this.listVet = response;
        if(this.consultation)
          this.consultationForm.patchValue({
            idVeterinario: this.consultation.idVeterinario
          });
        else
          this.consultationForm.patchValue({
            idVeterinario: this.listVet[0].idVeterinario
          });
        this.loading = false
      },
      (error) => {
        this.loading = false
        this._toastr.error(error.error.error, "Lista de Veterinarios")
      }
    );
  }

  getListDisease() {
    this.loading = true
    this._diseaseService.getListDisease().subscribe(
      (response) => {
        this.listDisease = response;
        if(this.consultation)
          this.consultationForm.patchValue({
            idEnfermedad: this.consultation.idEnfermedad
          });
        else
          this.consultationForm.patchValue({
            idEnfermedad: this.listDisease[0].idEnfermedad
          });
        this.loading = false
      },
      (error) => {
        this.loading = false
        this._toastr.error(error.error.error, "Lista de enfermedades")
      }
    );
  }

  getListPet() {
    this.loading = true
    this._petService.getListPet().subscribe(
      (response) => {
        this.listPet = response;
        if(this.consultation)
          this.consultationForm.patchValue({
            idMascota: this.consultation.idMascota
          });
        else
          this.consultationForm.patchValue({
            idMascota: this.listPet[0].idMascota
          });
        this.loading = false
      },
      (error) => {
        this.loading = false
        this._toastr.error(error.error.error, "Lista de mascotas")
      }
    );
  }

  regiterConsultation() {
    this.loading = true
    if (this.consultationForm.valid) {
      this._consultationService.postConsultation(this.consultationForm.value).subscribe(
        (response) => {
          this.loading = false
          this._toastr.success(response.message, "Registrar Consulta")
          this._modalRef.close();
        },
        (error) => {
          this.loading = false;
          this._toastr.error(error.message, "Registrar Consulta")
          this._modalRef.close();
        }
      )
    }
  }

  updateConsultation() {
    this.loading = true
    if (this.consultationForm.valid) {
      if (this.consultation) {
        this.consultation.idVeterinario = this.consultationForm.value.idVeterinario
        this.consultation.idMascota = this.consultationForm.value.idMascota
        this.consultation.idEnfermedad = this.consultationForm.value.idEnfermedad
        this.consultation.fechaConsulta = this.consultationForm.value.fechaConsulta
        this.consultation.fechaProximaConsulta = this.consultationForm.value.fechaProximaConsulta
        this.consultation.tratamiento = this.consultationForm.value.tratamiento
        this.consultation.observaciones = this.consultationForm.value.observaciones
        this.consultation.diagnostico = this.consultationForm.value.diagnostico
        this._consultationService.patchConsultation(this.consultation).subscribe(
          (response) => {
            this.loading = false
            this._toastr.success(response.message, "Actualizar Consulta")
            this._modalRef.close();
          },
          (error) => {
            this.loading = false;
            this._toastr.error(error.message, "Actualizar Consulta")
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