import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

//import { Notifications } from '../../commons/notifications';

@Component({
	selector: 'show-notification',
  template: `
		<ion-header>
		  <ion-navbar>
		    <ion-title>
		      Notifications
		    </ion-title>
		  </ion-navbar>
		</ion-header>
		<ion-content padding>
	    <ion-thumbnail item-left>
	      <img src="{{notification.img}}">
	    </ion-thumbnail>
	    <h2>{{notification.nick_name}}</h2>
	    <p>{{notification.text}}</p>
	    <button ion-button clear notification-right>View</button>
		</ion-content>
  `
})

export class ShowNotificationPage{
	//notification:Notifications;
	notification:{};
	constructor(private navParams:NavParams){
		console.log(navParams);
		this.notification = navParams.get('id');
	}
}