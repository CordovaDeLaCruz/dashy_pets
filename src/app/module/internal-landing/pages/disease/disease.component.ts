import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ToastrService } from 'ngx-toastr';
import { DiseaseModelResponse } from 'src/app/module/models/disease/list/listDiseaseModelResponse';
import { AddUpdateViewDiseaseModalComponent } from './add-update-view-disease-modal/add-update-view-disease-modal.component';
import { DiseaseService } from './service/disease.service';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css']
})
export class DiseaseComponent implements OnInit {
  loading = false;
  listDisease: DiseaseModelResponse[] = []
  selectDisease: DiseaseModelResponse | null
  addDisease = false
  viewDisease = false
  editDisease = false
  modalRef: MdbModalRef<AddUpdateViewDiseaseModalComponent>;

  constructor(
    private _modalService: MdbModalService,
    private _toastr: ToastrService,
    private _diseaseService: DiseaseService) {

  }

  ngOnInit(): void {
    this.getListDisease()
  }

  getListDisease() {
    this.loading = true
    this._diseaseService.getListDisease().subscribe(
      (response) => {
        this.listDisease = response;
        this.loading = false
      },
      (error) => {
        this.loading = false
        this._toastr.error(error.error.error, "Lista de Enfermedades")
      }
    );
  }

  openModal(Disease: DiseaseModelResponse | null, addDisease: boolean, viewDisease: boolean, editDisease: boolean) {
    this.selectDisease = Disease
    if(this.selectDisease != undefined){
      this.selectDisease.addDisease = addDisease
      this.selectDisease.editDisease = editDisease
      this.selectDisease.viewDisease = viewDisease
    }

    this.modalRef = this._modalService.open(AddUpdateViewDiseaseModalComponent, {
      ignoreBackdropClick: true
    });
    this.modalRef.component.disease = this.selectDisease

    if(!this.selectDisease)
      this.modalRef.onClose.subscribe(() => {
        this.getListDisease()
      });
  }

}
