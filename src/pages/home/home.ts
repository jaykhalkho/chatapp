
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { usercreds } from '../../models/interfaces/usercreds';

import { AuthProvider } from '../../providers/auth/auth';








@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  credentials = {} as usercreds;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthProvider) {
 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad HomePage');
 }

 signin() {
    this.authservice.home(this.credentials).then((res: any) => {
      if (!res.code)
        this.navCtrl.setRoot('TabsPage');
      else
        alert(res);
    })
  }

  passwordreset() {
     this.navCtrl.push('PasswordresetPage');
   }

 signup() {
    this.navCtrl.push('SignupPage');
  }

}
