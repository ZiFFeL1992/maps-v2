import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

declare var plugin: any;

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {

  constructor(public navCtrl: NavController) {

  }

  ngAfterViewInit() {

    var div = document.getElementById('map_canvas2');
    var map = plugin.google.maps.Map.getMap(div, {
      'controls': {
        'compass': false,
        'myLocationButton': true,
        'indoorPicker': false,
        'zoom': true
      },
      'gestures': {
        'scroll': true,
        'tilt': false,
        'rotate': true,
        'zoom': true
      },
      'camera': {
        'zoom': 6,
        'latLng': {
          'lat': 0,
          'lng': 0
        }
      }
    });
    map.one(plugin.google.maps.event.MAP_READY, function() {
      console.log("--> map_canvas2 : ready.");
    });
  }

}
