import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { NotificationPage } from '../pages/notification/notification';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
//Se importa el login y se agrega a los NgModule en declarations y en entryComponents
import { LoginPage } from '../pages/login/login';
import { ShowNotificationPage } from '../pages/notification/showNotification';
import { SignInPage } from '../pages/login/signin';
import { Fav } from '../components/fav/fav';

import { UserService } from '../services/user.service';
import { DBService } from '../services/db.service';

//Refactor por router
//links sera un array de objetos minimos para linkear la aplicación en base a un evento
//Con este objeto, se indicará a donde va a ir cada link

var links = [
  { component: LoginPage, name:'Login', segment:'login' },
  { component: TabsPage, name:'Tabs', segment:'tabs' },
  { component: ShowNotificationPage, name:'notification', segment:'notification/:id' },
];

import { AngularFireModule } from 'angularfire2';

import { StatusBar, Splashscreen } from 'ionic-native';


export const CONFIG = {
   apiKey: "AIzaSyCzD3oNx90M1F_Isg19GzQwfXtWGXYVyDo",
   authDomain: "platzitter-70b91.firebaseapp.com",
   databaseURL: "https://platzitter-70b91.firebaseio.com",
   projectId: "platzitter-70b91",
   storageBucket: "platzitter-70b91.appspot.com",
   messagingSenderId: "639016230348"  
};
@NgModule({
  declarations: [
    MyApp,
    NotificationPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    ShowNotificationPage,
    Fav,
    SignInPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, links),
    AngularFireModule.initializeApp(CONFIG),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotificationPage,
    ProfilePage,
    LoginPage,
    HomePage,
    TabsPage,
    ShowNotificationPage,
    Fav,
    SignInPage
  ],
  providers: [
    StatusBar,
    Splashscreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService, 
    DBService
  ]
})
export class AppModule {}
