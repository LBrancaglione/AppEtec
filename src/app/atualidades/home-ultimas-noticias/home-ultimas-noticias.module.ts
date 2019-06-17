import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeUltimasNoticiasPage } from './home-ultimas-noticias.page';

const routes: Routes = [
  {
    path: '',
    component: HomeUltimasNoticiasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeUltimasNoticiasPage]
})
export class HomeUltimasNoticiasPageModule {}
