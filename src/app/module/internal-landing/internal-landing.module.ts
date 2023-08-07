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
      ActivateDeactivateSpecialtyModalComponent
    ],
  imports:
    [InternalLandingRoutingModule,
      ComponentsModule,
      ReactiveFormsModule,
      CommonModule
    ]
})
export class InternalLandingModule { }
