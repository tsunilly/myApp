import { Party } from './party';

export const PARTIES: Party[] = [
    {
        id: 1,
        title: 'Nintendo Switch Party at Pennylane',
        location: 'Pennylane, Liverpool',
        guestlist: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
        start: new Date("November 12, 2017 15:00"),
        coverUrl: 'assets/imgs/cate-small.jpeg',
        avatarUrl: 'https://lh5.googleusercontent.com/-xHyRXzDEVEM/AAAAAAAAAAI/AAAAAAAAAHI/2yM4351AWA0/photo.jpg?sz=328',
    }, {
        id: 2,
        title: 'Beer Pong Brothers Westminster',
        location: 'Westminster Road, Liverpool',
        guestlist: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', '11th', '12th'],
        start: new Date("October 31, 2017 19:12"),
        coverUrl: 'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg',
        avatarUrl: 'https://pbs.twimg.com/profile_images/378800000173987836/36ddc368b99047fa59b9da9f4263fc24.jpeg',
    }, {
        id: 3,
        title: 'Cake Party!',
        location: 'Candy Kingdom',
        guestlist: ['Fionna', 'Prince Bubblegum', 'Lumpy Space Prince'],
        start: new Date("October 12, 2017 19:12"),
        coverUrl: 'http://vignette2.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/31/S3e9_Cake_the_Cat.png/revision/latest?cb=20110724091417',
        avatarUrl: 'http://vignette2.wikia.nocookie.net/adventuretimewithfinnandjake/images/1/15/Cake_the_cat.png/revision/latest?cb=20111002222323',
    }
]
