import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit  {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 2;

  constructor() { }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-1.1344734154974994 ,37.990465254999556],
      zoom: this.zoomLevel,
    });

    this.mapa.on('zoom', (ev) => {
      this.zoomLevel = this.mapa.getZoom();
    });

    this.mapa.on('zoomend', (ev) => {
      if ( this.mapa.getZoom() > 22) {
        this.mapa.zoomTo(22);
      }
    });
  }

  zoomOut() {
    this.mapa.zoomOut();

    
  }

  zoomIn() {
    this.mapa.zoomIn();

    
  }

}
