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
import { Component } from '@angular/core';
//Cada uno de los componentes tendran Notation parecidas

//Importamos 2 componentes nuevos o 2 funcionalidades nuevas, una alerta y un loading que ya pertenece a ionic
import { AlertController, LoadingController } from 'ionic-angular';

//Notation importada
//El selector es el nombre con el cual el componente será llamado en el html
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})

export class LoginPage{
	user = {"email":"","password":""};
	constructor(
		private alertCtrl: AlertController,
	 	public  loadingCtrl: LoadingController
 	){

 	}
 	//Propio de angular
 	ngOnInit(){
 		console.log('Arrancó el init');
 	}

 	login = ():void=>{

		let loading = this.loadingCtrl.create({
			content:'Please wait...'
		});

 		if(this.user.email != '' && this.user.password != ''){

 			loading.present();
 			setTimeout(()=>{
 				loading.dismiss();
 				let alert = this.alertCtrl.create({
	 				title:'Login',
	 				subTitle:'Login correcto',
	 				buttons:['Aceptar'] 					
 				});
 				alert.present();
 			}, 5000);

 		}else{

			loading.dismiss();
			let alert = this.alertCtrl.create({
				title:'Login',
				subTitle:'Login incorrecto',
				buttons:['Aceptar'] 					
			});
			alert.present(); 			

 		}


 	}



}
