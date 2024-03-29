import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DatabaseProvider } from '../providers/database/database';

import { SegundaPageModule } from '../pages/segunda/segunda.module';
import { TerceraPageModule } from '../pages/tercera/tercera.module';
import { SQLite } from '@ionic-native/sqlite';
import { AlertController } from 'ionic-angular';

import { HttpModule } from '@angular/http'


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    SegundaPageModule,
    TerceraPageModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    AlertController,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider
  ]
})
export class AppModule {}
