import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RelacoesinternacionaisHomePage } from './relacoesinternacionais-home.page';

const routes: Routes = [
  {
    path: '',
    component: RelacoesinternacionaisHomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RelacoesinternacionaisHomePage]
})
export class RelacoesinternacionaisHomePageModule {}
