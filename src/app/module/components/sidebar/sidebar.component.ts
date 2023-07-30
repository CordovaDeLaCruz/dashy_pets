import { Component } from '@angular/core';
import { MenuOption } from '../../models/sidebar/sidebarModelResponse';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  menuOptions: MenuOption[];
  activeOption: string = 'Cliente';

  constructor() {
  }

  ngOnInit(): void {
    const storedMenu = localStorage.getItem('menu');
    if (storedMenu) {
      this.menuOptions = JSON.parse(storedMenu);
    }
  }

  isActive(option: string): boolean {
    return this.activeOption === option;
  }

  setActive(option: string): void {
    this.activeOption = option;
  }
}
