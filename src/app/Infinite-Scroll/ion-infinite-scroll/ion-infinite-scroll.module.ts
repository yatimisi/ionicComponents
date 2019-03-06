import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IonInfiniteScrollPage } from './ion-infinite-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: IonInfiniteScrollPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IonInfiniteScrollPage]
})
export class IonInfiniteScrollPageModule {}
