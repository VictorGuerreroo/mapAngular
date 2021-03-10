import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.css'],
})
export class FullScreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    

    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-1.1344734154974994 ,37.990465254999556],
      zoom: 2,
    });
  }
}