import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Refactor
//import { AboutPage } from '../pages/about/about';
//import { ContactPage } from '../pages/contact/contact';
import { NotificationPage } from '../pages/notification/notification';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
//Se importa el login y se agrega a los NgModule en declarations y en entryComponents
import { LoginPage } from '../pages/login/login';
import { ShowNotificationPage } from '../pages/notification/showNotification';
import { Fav } from '../components/fav/fav';

import { UserService } from '../services/user.service';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//Importamos libreria de firebase para angular 2
import { AngularFireModule } from 'angularfire2';

export const CONFIG = {
   apiKey: "AIzaSyCzD3oNx90M1F_Isg19GzQwfXtWGXYVyDo",
   authDomain: "platzitter-70b91.firebaseapp.com",
   databaseURL: "https://platzitter-70b91.firebaseio.com",
   projectId: "platzitter-70b91",
   storageBucket: "platzitter-70b91.appspot.com",
   messagingSenderId: "639016230348"  
}

//Refactor por router
//links sera un array de objetos minimos para linkear la aplicación en base a un evento
//Con este objeto, se indicará a donde va a ir cada link

var links = [
  { component: LoginPage, name:'Login', segment:'login' },
  { component: TabsPage, name:'Tabs', segment:'tabs' }
];



@NgModule({
  declarations: [
    MyApp,
    //AboutPage,
    //ContactPage,
    NotificationPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    ShowNotificationPage,
    Fav
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, links),
    AngularFireModule.initializeApp(CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //AboutPage,
    //ContactPage,
    NotificationPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    ShowNotificationPage,
    Fav
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService
  ]
})
export class AppModule {}
