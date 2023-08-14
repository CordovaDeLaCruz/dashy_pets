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
import { PetClassComponent } from "./pages/pet-class/pet-class.component";

const routes: Routes = [
  {
    path: '',
    component: InternalLayoutComponent,
    children: [
      { path: 'cliente', component: CustomerComponent },
      { path: 'enfermedad', component: DiseaseComponent },
      { path: 'especialidad', component: SpecialtyComponent },
      { path: 'razasdeperros', component: PetTypeComponent },
      { path: 'tamañodeperros', component: PetClassComponent },
      { path: 'consulta', component: ConsultationComponent },
      { path: 'mascota', component: PetComponent },
      { path: 'veterinario', component: VetComponent },
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
