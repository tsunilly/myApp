import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Party } from '../../../app/party';
import { PartyService } from '../../../app/party.service';

@Component({
  selector: 'page-upcoming',
  templateUrl: 'upcoming.html'
})
export class UpcomingPage implements OnInit {
  parties: Party[] = [];
  constructor(private partyService: PartyService, public navCtrl: NavController) {

  }

  ngOnInit(): void {
    this.parties = this.partyService.getParties();
  }

}
