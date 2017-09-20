import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'tabs'
})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: string = 'home';
  tab2Root: string = 'simulator';
  tab3Root: string = 'home';

  constructor() {

  }
}
