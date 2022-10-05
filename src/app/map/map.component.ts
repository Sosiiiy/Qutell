import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 24.713799242510422,
      lng:  46.755108613493924
  };
  zoom = 15;
  markerOptions: google.maps.MarkerOptions = {
    draggable: false
};
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
