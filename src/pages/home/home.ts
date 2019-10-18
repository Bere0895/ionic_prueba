
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SegundaPage } from '../segunda/segunda';
import { TerceraPage } from '../tercera/tercera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goPagina2():void{
    this.navCtrl.push(SegundaPage);

  }

  goPagina3():void{
    this.navCtrl.push(TerceraPage);

  }

}


