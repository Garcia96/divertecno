import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { VrGamesComponent } from './vr-games/vr-games.component';
import { VrGameComponent } from './vr-games/vr-game/vr-game.component';

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
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AngularMaterialModule,
    ComponentsModule,
  ],
  exports: [RouterModule],
  declarations: [HomeComponent, VrGamesComponent, VrGameComponent],
})
export class PagesRoutingModule {}
