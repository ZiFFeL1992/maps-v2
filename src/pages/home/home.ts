import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ModalPage } from '../modal/modal';

declare var plugin: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  ngAfterViewInit() {

    var div = document.getElementById('map_canvas1');
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
    map.one(plugin.google.maps.event.MAP_READY, () => {
      map.animateCamera({
        'target': {
          'lat': 40.415363,
          'lng': -3.707398
        },
        'zoom': 17,
        'padding': 0
      }, () => {
        map.addMarker({
          'position': {
            'lat': 40.415363,
            'lng': -3.707398
          },
          'title': 'click me'
        }, (marker) => {
          marker.on(plugin.google.maps.event.MARKER_CLICK, () => {
            marker.showInfoWindow();
          });

          marker.on(plugin.google.maps.event.INFO_CLICK, () => {
            this.navCtrl.push(ModalPage);
          });
        });
      });
    });
  }


}
