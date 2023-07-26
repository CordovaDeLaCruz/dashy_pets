import { NgModule } from "@angular/core";
import { ComponentsModule } from "../components/components.module";
import { LandingRoutingModule } from "./landing-routes.module";
import { StartComponent } from "./pages/start/start.component";

@NgModule({
    declarations: [StartComponent],
    imports: [LandingRoutingModule, ComponentsModule]
})
export class LandingPageModule {}