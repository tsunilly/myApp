import { Party } from './party';
import { PARTIES } from './mock-parties';
import { Injectable } from '@angular/core';

@Injectable()
export class PartyService {
    getParties(): Party[] {
        // return Promise.resolve(PARTIES);
        return PARTIES
    }

    getParty(id: number): Party {
        return this.getParties()
                //    .then(parties => parties.find(hero => hero.id === id))
                   .find(party => party.id === id);
    }
}