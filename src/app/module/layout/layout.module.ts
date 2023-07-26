import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StartLayoutComponent } from './start-layout/start-layout.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [StartLayoutComponent],
  imports: [CommonModule, RouterModule, ComponentsModule],
})
export class LayoutModule {}
