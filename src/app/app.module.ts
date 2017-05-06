import { NgModule, ErrorHandler/*, Component*/ } from '@angular/core';
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

//import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

//Importamos libreria de firebase para angular 2
//import { AngularFireAuth } from 'angularfire2/auth';
//import firebase from 'firebase';
//import { AngularFireDatabase } from 'angularfire2/database';

//import { SQLite } from '@ionic-native/sqlite';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


export const CONFIG = {
   apiKey: "AIzaSyCzD3oNx90M1F_Isg19GzQwfXtWGXYVyDo",
   authDomain: "platzitter-70b91.firebaseapp.com",
   databaseURL: "https://platzitter-70b91.firebaseio.com",
   projectId: "platzitter-70b91",
   storageBucket: "platzitter-70b91.appspot.com",
   messagingSenderId: "639016230348"  
};

import * as firebase from 'firebase/app';

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
    Fav,
    SignInPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, links),
    //Observable,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireDatabase,
    FirebaseListObservable,
    AngularFireAuth,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(CONFIG),
  ],
  exports: [
    AngularFireModule
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
    Fav,
    SignInPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService, DBService,//, SQLite
    //Observable,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireDatabase,
    FirebaseListObservable,
    AngularFireAuth,
    AngularFireAuthModule,
  ]
})
export class AppModule {}
