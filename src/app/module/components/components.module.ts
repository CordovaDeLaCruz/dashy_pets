import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
    declarations: [NavbarComponent, FooterComponent],
    imports: [],
    exports: [NavbarComponent, FooterComponent]
})
export class ComponentsModule {}