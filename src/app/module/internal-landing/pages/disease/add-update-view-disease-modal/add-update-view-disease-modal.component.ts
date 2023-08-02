import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ToastrService } from 'ngx-toastr';
import { CreateDiseaseModelRequest } from 'src/app/module/models/disease/create/createDisease';
import { DiseaseModelResponse } from 'src/app/module/models/disease/list/listDiseaseModelResponse';
import { DiseaseService } from '../service/disease.service';

@Component({
  selector: 'app-add-update-view-disease-modal',
  templateUrl: './add-update-view-disease-modal.component.html',
  styleUrls: ['./add-update-view-disease-modal.component.css']
})
export class AddUpdateViewDiseaseModalComponent implements OnInit  {
  loading = false;
  @Input() disease: DiseaseModelResponse | null;
  diseaseForm: FormGroup;
  addDisease: CreateDiseaseModelRequest = new CreateDiseaseModelRequest()

  constructor(
    private _modalRef: MdbModalRef<AddUpdateViewDiseaseModalComponent>, 
    private _formBuilder: FormBuilder,
    private _diseaseService: DiseaseService,
    private _toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.diseaseForm = this._formBuilder.group({
      descripcionEnfermedad: ['', Validators.required],
    });
    if (this.disease){
      this.diseaseForm.patchValue(this.disease)
    }
  }

  submitDisease() {
    debugger
    this.loading = true
    if (this.diseaseForm.valid) {
      this.addDisease = this.diseaseForm.value
      this._diseaseService.postDisease(this.addDisease).subscribe(
        (response) => {
          const message = response.message
          this._toastr.success(message, "Agregar Enfermedad")
          this.closeModal()
        },
        (error) => {
          this.loading = false;
          this._toastr.error(error.message, "Agregar Enfermedad")
        }
      )
    }
  }


  closeModal() {
    this._modalRef.close();
  }

}
