import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenubarComponent } from './menubar/menubar.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MainLayoutComponent, MenubarComponent, SidebarComponent],
  imports: [CommonModule, RouterModule, MaterialDesignModule],
})
export class LayoutsModule {}
