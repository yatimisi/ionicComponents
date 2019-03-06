import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appMenu = [
      {title: 'action-sheet-example', url: '/action-sheet-example', icon: 'list'},
      {title: 'alert-example', url: '/alert-example', icon: 'list'},
      {title: 'ion-badge', url: '/ion-badge', icon: 'list'},
      {title: 'ion-button', url: '/ion-button', icon: 'list'},
      {title: 'ion-ripple-effect', url: '/ion-ripple-effect', icon: 'list'},
      {title: 'ion-card', url: '/ion-card', icon: 'list'},
      {title: 'ion-checkbox', url: '/ion-checkbox', icon: 'list'},
      {title: 'ion-chip', url: '/ion-chip', icon: 'list'},
      {title: 'ion-datetime', url: '/ion-datetime', icon: 'list'},
      {title: 'ion-fab-button', url: '/ion-fab-button', icon: 'list'},
      {title: 'ion-fab-list', url: '/ion-fab-list', icon: 'list'},
      {title: 'ion-fab', url: '/ion-fab', icon: 'list'},
      {title: 'ion-grid', url: '/ion-grid', icon: 'list'},
      {title: 'ion-infinite-scroll', url: '/ion-infinite-scroll', icon: 'list'},
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
