import { NgModule } from "@angular/core";
import { InternalLayoutComponent } from "../layout/internal-layout/internal-layout.component";
import { CustomerComponent } from "./pages/customer/customer.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: InternalLayoutComponent,
    children: [
      { path: 'customer', component: CustomerComponent },
      {
        path: '**', redirectTo: 'customer'
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalLandingRoutingModule { }
