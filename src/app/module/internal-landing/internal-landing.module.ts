import { NgModule } from "@angular/core";
import { CustomerComponent } from "./pages/customer/customer.component";
import { InternalLandingRoutingModule } from "./internal-landing-routes.module";
import { ComponentsModule } from "../components/components.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ConsultationComponent } from "./pages/consultation/consultation.component";

@NgModule({
  declarations: [CustomerComponent, ConsultationComponent],
  imports: [InternalLandingRoutingModule, ComponentsModule, ReactiveFormsModule, CommonModule]
})
export class InternalLandingModule {}
