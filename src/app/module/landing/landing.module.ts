import { NgModule } from "@angular/core";
import { ComponentsModule } from "../components/components.module";
import { LandingRoutingModule } from "./landing-routes.module";
import { StartComponent } from "./pages/start/start.component";
import { LoginComponent } from "./pages/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [StartComponent, LoginComponent],
    imports: [LandingRoutingModule, ComponentsModule, ReactiveFormsModule]
})
export class LandingPageModule {}
