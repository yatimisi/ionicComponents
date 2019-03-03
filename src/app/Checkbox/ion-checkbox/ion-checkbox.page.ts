import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-checkbox',
  templateUrl: './ion-checkbox.page.html',
  styleUrls: ['./ion-checkbox.page.scss'],
})
export class IonCheckboxPage implements OnInit {
  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
