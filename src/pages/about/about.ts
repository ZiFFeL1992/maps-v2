import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController) {

  }

  modal(): void {
    let m = this.modalCtrl.create(ModalPage);
    m.present();
  }
}
