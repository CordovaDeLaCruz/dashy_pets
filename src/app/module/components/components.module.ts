import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarSessionComponent } from "./navbar-session/navbar-session.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [NavbarComponent, FooterComponent, SidebarComponent, NavbarSessionComponent],
    imports: [RouterModule, CommonModule],
    exports: [NavbarComponent, FooterComponent, SidebarComponent, NavbarSessionComponent]
})
export class ComponentsModule {}
