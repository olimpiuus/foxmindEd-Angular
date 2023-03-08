import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent {
  zoom = 12;
  center = {
    lat: 29.42023,
    lng: -82.10895
  };
  markers = [
    {
      position: {
        lat: 29.42023,
        lng: -82.10895
      },
      label: {
        color: 'orange',
        text: 'Orange Shop '
      },
      title: 'Orange Shop '
    }
  ];
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8
  };

  apiLoaded: Observable<boolean>;

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyDYdqsbt4WTIvcTWKUwlKJ8iFgcVg9c66g',
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }
}
