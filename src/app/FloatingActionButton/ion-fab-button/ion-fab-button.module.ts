import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IonFabButtonPage } from './ion-fab-button.page';

const routes: Routes = [
  {
    path: '',
    component: IonFabButtonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IonFabButtonPage]
})
export class IonFabButtonPageModule {}
