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
import { AddUpdateViewConsultationModalComponent } from "./pages/consultation/add-update-view-consultation-modal/add-update-view-consultation-modal.component";
import { ActivateDeactivateConsultationModalComponent } from "./pages/consultation/activate-deactivate-consultation-modal/activate-deactivate-consultation-modal.component";
import { AppRoleComponent } from "./pages/app-role/app-role.component";
import { AddUpdateViewAppRoleModalComponent } from "./pages/app-role/add-update-view-app-role-modal/add-update-view-app-role-modal.component";
import { ActivateDeactivateAppRoleModalComponent } from "./pages/app-role/activate-deactivate-app-role-modal/activate-deactivate-app-role-modal.component";
import { AppPermissionComponent } from "./pages/app-permission/app-permission.component";
import { AddUpdateViewAppPermissionModalComponent } from "./pages/app-permission/add-update-view-app-permission-modal/add-update-view-app-permission-modal.component";
import { ActivateDeactivateAppPermissionModalComponent } from "./pages/app-permission/activate-deactivate-app-permission-modal/activate-deactivate-app-permission-modal.component";
import { RoleAppPermissionComponent } from "./pages/role-app-permission/role-app-permission.component";
import { AddUpdateViewRoleAppPermissionModalComponent } from "./pages/role-app-permission/add-update-view-app-role-permission-modal/add-update-view-app-role-permission-modal.component";
import { ActivateDeactivateRoleAppPermissionModalComponent } from "./pages/role-app-permission/activate-deactivate-app-role-permission-modal/activate-deactivate-app-role-permission-modal.component";
import { UserComponent } from "./pages/user/user.component";
import { AddUpdateViewUserModalComponent } from "./pages/user/add-update-view-user-modal/add-update-view-user-modal.component";
import { ActivateDeactivateUserModalComponent } from "./pages/user/activate-deactivate-user-modal/activate-deactivate-user-modal.component";

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
      ActivateDeactivatePetModalComponent,
      ConsultationComponent,
      AddUpdateViewConsultationModalComponent,
      ActivateDeactivateConsultationModalComponent,
      AppRoleComponent,
      AddUpdateViewAppRoleModalComponent,
      ActivateDeactivateAppRoleModalComponent,
      AppPermissionComponent,
      AddUpdateViewAppPermissionModalComponent,
      ActivateDeactivateAppPermissionModalComponent,
      RoleAppPermissionComponent,
      AddUpdateViewRoleAppPermissionModalComponent,
      ActivateDeactivateRoleAppPermissionModalComponent,
      UserComponent,
      AddUpdateViewUserModalComponent,
      ActivateDeactivateUserModalComponent
    ],
  imports:
    [InternalLandingRoutingModule,
      ComponentsModule,
      ReactiveFormsModule,
      CommonModule
    ]
})
export class InternalLandingModule { }
