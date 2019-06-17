import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeAtualidadesPage } from './home-atualidades.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAtualidadesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeAtualidadesPage]
})
export class HomeAtualidadesPageModule {}
