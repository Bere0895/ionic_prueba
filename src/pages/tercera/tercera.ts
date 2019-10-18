import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

import { DatabaseProvider } from '../../providers/database/database'
import {  FormBuilder } from '@angular/forms';
/**
 * Generated class for the TerceraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tercera',
  templateUrl: 'tercera.html',
})
export class TerceraPage {
  ListUser: any;
  
  constructor(public navCtrl: NavController, private database: DatabaseProvider, private formBuilder: FormBuilder) {
   

  }
  GetAllUser(){
    this.database.GetAllUsers().then((data: any) => {
      console.log(data);
      this.ListUser = data;
    }, (error) => {
      console.log(error);
    })
  }

  DeleteUser(idUser){
    console.log(idUser);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TerceraPage');
  }

}


  
