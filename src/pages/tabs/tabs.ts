import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { BrowsePage } from '../browse/browse';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BrowsePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
