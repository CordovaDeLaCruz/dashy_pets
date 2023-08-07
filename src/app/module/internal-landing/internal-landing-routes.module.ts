import { NgModule } from "@angular/core";
import { InternalLayoutComponent } from "../layout/internal-layout/internal-layout.component";
import { CustomerComponent } from "./pages/customer/customer.component";
import { RouterModule, Routes } from "@angular/router";
import { ConsultationComponent } from "./pages/consultation/consultation.component";
import { PetComponent } from "./pages/pet/pet.component";
import { VetComponent } from "./pages/vet/vet.component";
import { DiseaseComponent } from "./pages/disease/disease.component";
import { SpecialtyComponent } from "./pages/specialty/specialty.component";
import { PetTypeComponent } from "./pages/pet-type/pet-type.component";

const routes: Routes = [
  {
    path: '',
    component: InternalLayoutComponent,
    children: [
      { path: 'Cliente', component: CustomerComponent },
      { path: 'Enfermedad', component: DiseaseComponent },
      { path: 'Especialidad', component: SpecialtyComponent },
      { path: 'Tipo Mascota', component: PetTypeComponent },
      { path: 'Consulta', component: ConsultationComponent },
      { path: 'Mascota', component: PetComponent },
      { path: 'Veterinario', component: VetComponent },
      {
        path: '**',
        redirectTo: '404',
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalLandingRoutingModule { }
