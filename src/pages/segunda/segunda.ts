import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SegundaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segunda',
  templateUrl: 'segunda.html',
})
export class SegundaPage {
  user =new Object()
 

  inputtext:string;
  inputmail:string
  key:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegundaPage');
  }

  saveData(){
    this.user.name=this.inputtext
    this.user.email=this.inputmail
    console.log(this.user.email)
    this.storage.set(this.key, this.inputtext);
  }

  loadData(){

    this.storage.get(this.key).then((val) => {
      console.log('Your username is', val.name);
      console.log('email : ', val.email)
    });
  }
}
