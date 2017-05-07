/* Core Imports */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/* Commons Imports */
import { Notifications } from '../../commons/notification';

/* Page Imports */
import { ShowNotificationPage } from './showNotification';

/* Declaración del componente y sus dependencias */
@Component({
	selector: 'page-notification',
	templateUrl: 'notification.html'
})

/* Clase exportable */
export class NotificationPage {

	notifications:Array<Notifications> = [
			{id:1, action: 'reply', img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', nick_name:'@freddier', text:'platzitter es lo mas'},
			{id:2, action: 'replatzitt', img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', nick_name:'@cvander', text:'que chulo que esta esta app en iOS'},
			{id:3, action: 'mention', img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', nick_name:'@jorgeucano', text:'test 1234'}
		];

	constructor(public navCtrl: NavController) {

	}

	showNotification(_notification:Notifications){
		this.navCtrl.push(ShowNotificationPage, {
			id:_notification
		});
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