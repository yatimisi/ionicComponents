import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ion-grid', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'action-sheet-example', loadChildren: './Action Sheet/action-sheet-example/action-sheet-example.module#ActionSheetExamplePageModule' },
  { path: 'alert-example', loadChildren: './Alert/alert-example/alert-example.module#AlertExamplePageModule' },
  { path: 'ion-badge', loadChildren: './Badge/ion-badge/ion-badge.module#IonBadgePageModule' },
  { path: 'ion-button', loadChildren: './Button/ion-button/ion-button.module#IonButtonPageModule' },
  { path: 'ion-ripple-effect', loadChildren: './Button/ion-ripple-effect/ion-ripple-effect.module#IonRippleEffectPageModule' },
  { path: 'ion-card', loadChildren: './Card/ion-card/ion-card.module#IonCardPageModule' },
  { path: 'ion-checkbox', loadChildren: './Checkbox/ion-checkbox/ion-checkbox.module#IonCheckboxPageModule' },
  { path: 'ion-chip', loadChildren: './Chip/ion-chip/ion-chip.module#IonChipPageModule' },
  { path: 'ion-datetime', loadChildren: './DateTimePickers/ion-datetime/ion-datetime.module#IonDatetimePageModule' },
  { path: 'ion-fab-button', loadChildren: './FloatingActionButton/ion-fab-button/ion-fab-button.module#IonFabButtonPageModule' },
  { path: 'ion-fab-list', loadChildren: './FloatingActionButton/ion-fab-list/ion-fab-list.module#IonFabListPageModule' },
  { path: 'ion-fab', loadChildren: './FloatingActionButton/ion-fab/ion-fab.module#IonFabPageModule' },
  { path: 'ion-grid', loadChildren: './Grid/ion-grid/ion-grid.module#IonGridPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
