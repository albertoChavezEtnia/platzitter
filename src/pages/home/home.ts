import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	listado:Array<tweet> = [
		{img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', nick_name:'@freddier', text:'platzitter es lo mas'},
		{img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', nick_name:'@cvander', text:'que chulo que esta esta app en iOS'},
		{img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', nick_name:'@jorgeucano', text:'test 1234'}
	];
  constructor(public navCtrl: NavController) {

  }

}

interface tweet{
	img:string;
	nick_name:string;
	text:string;
}