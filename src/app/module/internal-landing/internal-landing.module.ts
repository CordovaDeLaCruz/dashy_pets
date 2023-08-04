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

@NgModule({
  declarations:
    [CustomerComponent,
      ConsultationComponent,
      AddUpdateCustomerModalComponent,
      ActivateDeactivateCustomerModalComponent,
      DiseaseComponent,
      AddUpdateViewDiseaseModalComponent,
      ActivateDeactivateDiseaseModalComponent
    ],
  imports:
    [InternalLandingRoutingModule,
      ComponentsModule,
      ReactiveFormsModule,
      CommonModule
    ]
})
export class InternalLandingModule { }
