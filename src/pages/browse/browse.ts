import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UpcomingPage } from './upcoming/upcoming';
/**
 * Generated class for the BrowsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-browse',
  templateUrl: 'browse.html',
})
export class BrowsePage {
  pets: string = 'puppies';
  tab1Root = UpcomingPage;
  tab2Root = UpcomingPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getItems(type: string){
    if (type == 'puppies'){
      return ['Ruby'];
    } else {
      return ['Luna'];
    }
  }

}
