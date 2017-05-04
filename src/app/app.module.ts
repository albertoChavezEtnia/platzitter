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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    IonicModule.forRoot(MyApp, links)
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
