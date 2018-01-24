import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
//PLUGIN
import { OneSignal } from '@ionic-native/onesignal';

@Injectable()
export class PushNotificationProvider {

  constructor(
    private oneSignal: OneSignal,
    public platform: Platform
  ) {
    console.log('Hello PushNotificationProvider Provider');
  }


  iniciarNotificacion(){
    if(this.platform.is('cordova')){

      this.oneSignal.startInit('2279da90-7e3b-48fc-8ac3-a1b21a45bb8a', '995286063294  ');
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
      this.oneSignal.handleNotificationReceived().subscribe(() => {
       // do something when notification is received
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
      });

      this.oneSignal.endInit();
    }
    else{
      console.log('estas desde un navegador')
    }
  }

}
