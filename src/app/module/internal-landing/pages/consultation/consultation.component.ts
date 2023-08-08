import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ToastrService } from 'ngx-toastr';
import { ConsultationModel } from 'src/app/module/models/consultation/consultation-models';
import { ActivateDeactivateConsultationModalComponent } from './activate-deactivate-consultation-modal/activate-deactivate-consultation-modal.component';
import { AddUpdateViewConsultationModalComponent } from './add-update-view-consultation-modal/add-update-view-consultation-modal.component';
import { ConsultationService } from './service/consultation.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  loading = false;
  listConsultation: ConsultationModel[] = []
  selectConsultation: ConsultationModel | null
  addConsultation = false
  viewConsultation = false
  editConsultation = false
  modalRef: MdbModalRef<AddUpdateViewConsultationModalComponent>;
  activateDeactivateModalRef: MdbModalRef<ActivateDeactivateConsultationModalComponent>;

  constructor(private _modalService: MdbModalService, private _vetService: ConsultationService, private _toastr: ToastrService) {

  }
  ngOnInit(): void {
    this.getListConsultation()
  }

  getListConsultation() {
    this.loading = true
    this._vetService.getListConsultation().subscribe(
      (response) => {
        this.listConsultation = response;
        this.loading = false
      },
      (error) => {
        this.loading = false
        this._toastr.error(error.error.error, "Lista de consultas")
      }
    );
  }

  addViewEditConsultationModal(consultation: ConsultationModel | null, addConsultation: boolean, viewConsultation: boolean, editConsultation: boolean) {
    this.selectConsultation = consultation
    if (this.selectConsultation != undefined) {
      this.selectConsultation.addConsultation = addConsultation
      this.selectConsultation.editConsultation = editConsultation
      this.selectConsultation.viewConsultation = viewConsultation
    }

    this.modalRef = this._modalService.open(AddUpdateViewConsultationModalComponent, {
      ignoreBackdropClick: true
    });
    this.modalRef.component.consultation = this.selectConsultation

    this.modalRef.onClose.subscribe(() => {
      this.getListConsultation()
    });

  }

  activateDeactivateModal(consultation: ConsultationModel){
    this.activateDeactivateModalRef = this._modalService.open(ActivateDeactivateConsultationModalComponent, {
      ignoreBackdropClick: true
    });
    this.activateDeactivateModalRef.component.consultation = consultation

    this.activateDeactivateModalRef.onClose.subscribe(() => {
      this.getListConsultation()
    });
  }

}
