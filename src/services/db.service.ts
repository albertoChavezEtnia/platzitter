/* Core Imports */
import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native'; //,SQLiteObject 
//import { SQLite } from '@ionic-native/sqlite'; //,SQLiteObject 

/* Declaración de Servicio Injectable para Inyección de Dependencias */
@Injectable()

/* Declaración de Clase Exportable */
export class DBService {
	//db: SQLite = null;
	db = null;

  constructor() {
    this.db = new SQLite();
    this.openDatabase();
    this.createTable();
  }

	openDatabase () {
		return this.db.openDatabase({
			name:'data.db',
			location:'default'
		});
	}

	createTable (){
		let sql = `
			CREATE TABLE IF NOT EXIST users(
				id INTEGER PRIMARY KEY AUTOINCREMENT,
				nick_name TEXT,
				full_name TEXT,
				email TEXT,
				password TEXT,
			)
		`;
		return this.db.executeSql(sql, []);
	}

	getAll () {
		let sql = 'SELECT * FROM users';
		return this.db.executeSql(sql, [])
		.then(response=>{
			let users = [];
			for (let index = 0; index < response.rows.length; index ++){
				users.push(response.rows.item(index));
			}
			return Promise.resolve(users);
		});
	}

	create(user:any){
		let sql = `
			INSERT INTO 
				users (nick_name, full_name, email, password) 
				VALUES (?,?,?,?)
		`;
		return this.db.executeSql(sql, [
			user.nick_name,
			user.full_name,
			user.email,
			user.password
		]);
	}

 	update(user: any){
		let sql = 'UPDATE users SET nick_name=?, full_name=?, email=?, password=? WHERE id=?';
		return this.db.executeSql(sql, [user.nick_name, user.full_name, user.email, user.password, user.id]);
   }

   delete(user: any){
		let sql = 'DELETE FROM users WHERE id=?';
		return this.db.executeSql(sql, [user.id]);
   }

}