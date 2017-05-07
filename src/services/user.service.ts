/* Core Imports */
import { Injectable } from '@angular/core';

/* Common Imports */
import { User } from '../commons/user';

/* Service Imports */
import { USERS } from './mocks/users';
import { DBService } from './db.service';

/* Declaración de Servicio Injectable para Inyección de Dependencias */
@Injectable()

/* Clase Exportable */
export class UserService{

	constructor(private DBService: DBService){
		DBService.openDatabase();
		DBService.createTable();
	}

	getUsers(): Promise<User[]>{
		console.log('Entré al promise');
		return Promise.resolve(USERS);
	}

	loginUsers(email, password): Promise<User>{
		let user:User;
		user = this.find(email, password);
		console.log(user);
		return Promise.resolve(user);
	}

	find(email, password): User{
		let user:User;
		user = USERS.find(x => x.email === email);
		if (user !== undefined && user.password == password) {
			return user;
		}else{
			return undefined;
		}
	}


}