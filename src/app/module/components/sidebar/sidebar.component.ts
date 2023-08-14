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
  activeOption: string = 'cliente';
  fullName: string

  constructor() {
  }

  ngOnInit(): void {
    const storedMenu = localStorage.getItem('menu');
    const fullName = localStorage.getItem('fullName')
    if(fullName) this.fullName = fullName
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
