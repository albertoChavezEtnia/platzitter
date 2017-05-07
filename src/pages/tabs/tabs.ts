/* Core Imports */
import { Component } from '@angular/core';

/* Page Imports */
import { NotificationPage } from '../notification/notification';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

/* Declaración del componente y sus dependencias */
@Component({
  templateUrl: 'tabs.html'
})

/* Clase Exportable */
export class TabsPage {

	tab1Root = HomePage;
	tab2Root = NotificationPage;
	tab3Root = ProfilePage;

	constructor() {

	}
}
