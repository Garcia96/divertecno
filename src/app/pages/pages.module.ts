import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { VrGamesComponent } from './vr-games/vr-games.component';
import { VrGameComponent } from './vr-games/vr-game/vr-game.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'vr-games',
    component: VrGamesComponent,
  },
  {
    path: 'vr-games/:id',
    component: VrGameComponent,
  },
  {
    path: 'technology',
    component: TechnologyComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularMaterialModule,
    ComponentsModule,
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    VrGamesComponent,
    VrGameComponent,
    TechnologyComponent,
  ],
})
export class PagesRoutingModule {}
