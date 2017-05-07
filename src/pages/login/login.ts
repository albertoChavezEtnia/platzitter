/*
ESTO ES UN NUEVO COMPONENTE, el hecho que se cree una carpeta para una pagina se debe cumplir con las 3 cosas 
descritas a contunuación:

ts => equivale a crear una clase para el componente

Cada componente se basa en 3 cosas:

Una clase (archivo.ts)
Un HTML 
Un CSS (en este caso scss)

*/

//Notation, siempre se debe incluir al crear un nuevo archivo typescript
//Este archivo contendrá toda la funcionalidad de nuestro componente
//Una Notation, es un agregado de funcionalidades que se crea y se genera para nuestros tags
//Es por eso que importamos 'Component' , que viene de @angular/core
//Cada uno de los componentes tendran Notation parecidas
//Importamos 2 componentes nuevos o 2 funcionalidades nuevas, una alerta y un loading que ya pertenece a ionic

/* Core Imports */
import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/* Page Imports */
import { SignInPage } from './signin';

/* Service Imports */
import { UserService } from '../../services/user.service';

//Notation importada
//El selector es el nombre con el cual el componente será llamado en el html

/* Declaración del componente y sus dependencias */
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})

/* Clase exportable */
export class LoginPage{
	user = {"email":"","password":""};
	//constructor va a generar todo lo necesario, instancias antes de ejecutar lo demás
	constructor(
		private 	alertCtrl: AlertController,
	 	public  	loadingCtrl: LoadingController,
	 	public	navCtrl: NavController,
	 	private 	userService: UserService, 
 	){
 		/*
		DBService.openDatabase();
		DBService.createTable();
		console.dir(DBService.getAll());
		*/
 	}

 	/* Propio de angular, nos sirve para realizar cosas cuando inicia angular*/
 	ngOnInit(){
 		console.log('Arrancó el init');
 	}
 	/* Esto se lee : login va a ser igual a funcion (arrow function) que retorna vacío */
 	login = ():void=>{

        	if (this.user.email != "" && this.user.password != ""){

			let usuarios;

         /*
         this.userService.getUser().then(
             function(users){
                 usuarios = users;
                 console.log(usuarios);
             }
         );
         */

			let loading = this.loadingCtrl.create({
				content:'Please wait...'
			});
 			loading.present();

 			let login = false;
 			this.userService
 				.loginUsers(this.user.email, this.user.password)
 				.then(
 					(response)=>{
 						console.log(response);
 						loading.dismiss();
 						if (response!==undefined) { //Quiere decir que encontramos al usuario
 							this.navCtrl.push(TabsPage);
 						}else{
							let alert = this.alertCtrl.create({
								title:'Login',
								subTitle:'Usuario y/o contraseña invalido',
								buttons:['Aceptar'] 					
							});
							alert.present();
 						}
 					}
				)
 			/*
 			setTimeout(()=>{
 				loading.dismiss();
 				
 				let alert = this.alertCtrl.create({
	 				title:'Login',
	 				subTitle:'Login correcto',
	 				buttons:['Aceptar'] 					
 				});
 				alert.present();
 				
 				this.navCtrl.push(TabsPage);}, 5000);
 			*/
 		}else{
			//loading.dismiss();
			let alert = this.alertCtrl.create({
				title:'Login',
				subTitle:'Debe completar el usuario y contraseña.',
				buttons:['Aceptar'] 					
			});
			alert.present(); 			
 		}
 	}

 	signIn = ():void=>{
 		//alert('signIn');
 		this.navCtrl.push(SignInPage);
 	}

}
