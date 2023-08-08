import { NgModule } from "@angular/core";
import { CustomerComponent } from "./pages/customer/customer.component";
import { InternalLandingRoutingModule } from "./internal-landing-routes.module";
import { ComponentsModule } from "../components/components.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ConsultationComponent } from "./pages/consultation/consultation.component";
import { AddUpdateCustomerModalComponent } from "./pages/customer/add-update-customer-modal/add-update-customer-modal.component";
import { DiseaseComponent } from "./pages/disease/disease.component";
import { AddUpdateViewDiseaseModalComponent } from "./pages/disease/add-update-view-disease-modal/add-update-view-disease-modal.component";
import { ActivateDeactivateCustomerModalComponent } from "./pages/customer/activate-deactivate-customer-modal/activate-deactivate-customer-modal.component";
import { ActivateDeactivateDiseaseModalComponent } from "./pages/disease/activate-deactivate-disease-modal/activate-deactivate-disease-modal.component";
import { SpecialtyComponent } from "./pages/specialty/specialty.component";
import { AddUpdateViewSpecialtyModalComponent } from "./pages/specialty/add-update-view-specialty-modal/add-update-view-specialty-modal.component";
import { ActivateDeactivateSpecialtyModalComponent } from "./pages/specialty/activate-deactivate-specialty-modal/activate-deactivate-specialty-modal.component";
import { VetComponent } from "./pages/vet/vet.component";
import { AddUpdateVetModalComponent } from "./pages/vet/add-update-view-vet-modal/add-update-view-vet-modal.component";
import { ActivateDeactivateVetModalComponent } from "./pages/vet/activate-deactivate-vet-modal/activate-deactivate-vet-modal.component";
import { PetTypeComponent } from "./pages/pet-type/pet-type.component";
import { AddUpdateViewPetTypeModalComponent } from "./pages/pet-type/add-update-view-pet-type-modal/add-update-view-pet-type-modal.component";
import { ActivateDeactivatePetTypeModalComponent } from "./pages/pet-type/activate-deactivate-pet-type-modal/activate-deactivate-pet-type-modal.component";
import { PetClassComponent } from "./pages/pet-class/pet-class.component";
import { AddUpdateViewPetClassModalComponent } from "./pages/pet-class/add-update-view-pet-class-modal/add-update-view-pet-class-modal.component";
import { ActivateDeactivatePetClassModalComponent } from "./pages/pet-class/activate-deactivate-pet-class-modal/activate-deactivate-pet-class-modal.component";
import { PetComponent } from "./pages/pet/pet.component";
import { AddUpdateViewPetModalComponent } from "./pages/pet/add-update-view-pet-modal/add-update-view-pet-modal.component";
import { ActivateDeactivatePetModalComponent } from "./pages/pet/activate-deactivate-pet-modal/activate-deactivate-pet-modal.component";

@NgModule({
  declarations:
    [CustomerComponent,
      ConsultationComponent,
      AddUpdateCustomerModalComponent,
      ActivateDeactivateCustomerModalComponent,
      DiseaseComponent,
      AddUpdateViewDiseaseModalComponent,
      ActivateDeactivateDiseaseModalComponent,
      SpecialtyComponent,
      AddUpdateViewSpecialtyModalComponent,
      ActivateDeactivateSpecialtyModalComponent,
      VetComponent,
      AddUpdateVetModalComponent,
      ActivateDeactivateVetModalComponent,
      PetTypeComponent,
      AddUpdateViewPetTypeModalComponent,
      ActivateDeactivatePetTypeModalComponent,
      PetClassComponent,
      AddUpdateViewPetClassModalComponent,
      ActivateDeactivatePetClassModalComponent,
      PetComponent,
      AddUpdateViewPetModalComponent,
      ActivateDeactivatePetModalComponent
    ],
  imports:
    [InternalLandingRoutingModule,
      ComponentsModule,
      ReactiveFormsModule,
      CommonModule
    ]
})
export class InternalLandingModule { }
