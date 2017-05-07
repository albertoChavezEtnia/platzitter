/* Imports */

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LoginPage } from '../pages/login/login';
//import { TabsPage } from '../pages/tabs/tabs';
//import { DBService } from '../services/db.service';


/* Llamado a la vista principal */

@Component({
   templateUrl: 'app.html'
})

/* Clase exportable */

export class MyApp {
   /* rootPage es la página principal con la que arranca la aplicación, esta es importada arriba e instanciada acá */
   //rootPage:any = TabsPage;
   rootPage:any = LoginPage;

   constructor(
      // Variable: TipoDeVariable,
      platform: Platform, 
      //StatusBar: StatusBar, 
      //Splashscreen: Splashscreen,
      //public DBService: DBService
   ){
      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      });
   }
}