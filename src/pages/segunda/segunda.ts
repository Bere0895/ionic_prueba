import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { DatabaseProvider } from '../../providers/database/database'
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from 'ionic-angular';

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

  private ListUser : any;  

  private todo: FormGroup;
  constructor(
    public navCtrl: NavController, 
    private database: DatabaseProvider, 
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController
    ) {

    this.todo = this.formBuilder.group({
     name: ['', Validators.required],
      email: ['', Validators.required],
      contrasena: ['', Validators.required],
      contrasenac: ['', Validators.required]

    });

  }

  
  CreateUser(){       
    console.log(this.todo);    
    this.database.CreateUser(this.todo.value.contrasena, this.todo.value.name, this.todo.value.email ).then( (data) => {
      console.log(data);
      this.GetAllUser();
      let alert = this.alertCtrl.create({
        title: ';) ;)',
        subTitle: 'Datos guardados ',
        buttons: ['OK']
      });
      alert.present();
    }, (error) => {
      console.log(error);
      let alert = this.alertCtrl.create({
        title: ';) ;)',
        subTitle: 'Datos no guardados ',
        buttons: ['OK']
      });
      alert.present();
      
    })
   

      }
 
      GetAllUser(){
        this.database.GetAllUsers().then((data: any) => {
          console.log(data);
          this.ListUser = data;
        }, (error) => {
          console.log(error);
        })
      }
  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegundaPage');
  }

}

