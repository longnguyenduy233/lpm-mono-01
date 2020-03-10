import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, HomeComponent, MenuComponent, MenuItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    MenuItemComponent
  ]
})
export class HomeModule { }
