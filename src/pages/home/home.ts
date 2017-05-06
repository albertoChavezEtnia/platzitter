import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Twitt } from '../../commons/twitt';
//import { Fav } from '../../components/fav/fav';
import { UserService } from '../../services/user.service';

import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	listado: FirebaseListObservable<any>;

	/*
	listado:Array<tweet> = [
		{
			img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', 
			nick_name:'@freddier', 
			text:'platzitter es lo mas'
		},
		{	
			img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', 
			nick_name:'@cvander', 
			text:'que chulo que esta esta app en iOS'
		},
		{
			img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', 
			nick_name:'@jorgeucano', 
			text:'test 1234'
		}
	];
	*/

  	constructor(
  		public navCtrl: NavController,
  		private userService: UserService,
  		public database: AngularFireDatabase,
  	){
  		this.listado = this.database.list('/twitts');

		this.listado.push({
			img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', 
			nick_name:'@freddier', 
			text:'platzitter es lo mas'
		});
		this.listado.push({	
			img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', 
			nick_name:'@cvander', 
			text:'que chulo que esta esta app en iOS'
		});
		this.listado.push({
			img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', 
			nick_name:'@jorgeucano', 
			text:'test 1234'
		});
  	}

  onFav(response:string){
  	console.log(response);
  }

}
/*
interface tweet{
	img:string;
	nick_name:string;
	text:string;
}
*/