import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [NavbarComponent, FooterComponent],
    imports: [RouterModule],
    exports: [NavbarComponent, FooterComponent]
})
export class ComponentsModule {}
