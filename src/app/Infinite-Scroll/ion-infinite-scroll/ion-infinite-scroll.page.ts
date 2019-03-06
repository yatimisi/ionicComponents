import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ion-infinite-scroll',
  templateUrl: './ion-infinite-scroll.page.html',
  styleUrls: ['./ion-infinite-scroll.page.scss'],
})
export class IonInfiniteScrollPage implements OnInit {
  limit = 10;

  data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  constructor() { }
  
  ngOnInit() {
  }
  
  doInfinite(infiniteScrollEvent) {
    this.limit += 5;
    infiniteScrollEvent.target.complete();
  }
  
}
