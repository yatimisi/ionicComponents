import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-datetime',
  templateUrl: './ion-datetime.page.html',
  styleUrls: ['./ion-datetime.page.scss'],
})
export class IonDatetimePage implements OnInit {
  customYearValues;
  customDayShortNames;
  customPickerOptions;

  constructor() { }

  ngOnInit() {
    this.customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];

    this.customDayShortNames = [
      's\u00f8n',
      'man',
      'tir',
      'ons',
      'tor',
      'fre',
      'l\u00f8r'
    ];

    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

}
