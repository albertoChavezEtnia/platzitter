import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Notifications } from '../../commons/notifications';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  notifications:Array<Notifications> = [
      {action: 'reply', img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', nick_name:'@freddier', text:'platzitter es lo mas'},
      {action: 'replatzitt', img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', nick_name:'@cvander', text:'que chulo que esta esta app en iOS'},
      {action: 'mention', img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', nick_name:'@jorgeucano', text:'test 1234'}
    ];

  constructor(public navCtrl: NavController) {

  }

}

/*
//Deprecated, fueron exportadas a commons

interface Notifications{
  img:string;
  nick_name:string;
  text:string;
  action:string;
}
*/