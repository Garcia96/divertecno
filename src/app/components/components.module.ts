import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AngularMaterialModule } from '../angular-material.module';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [HeaderComponent, SliderComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxUsefulSwiperModule,
    AngularMaterialModule,
  ],
  exports: [HeaderComponent, SliderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
