import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  pet = 'puppies';
  constructor(public navCtrl: NavController) {

  }

  getItems(type: string){
    if (type == 'puppies'){
      return ['Ruby'];
    } else {
      return ['Luna'];
    }
  }

}
