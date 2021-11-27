import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import EsriConfig from "@arcgis/core/config";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import * as heatmapRendererCreator from "@arcgis/core/smartMapping/renderers/heatmap";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Limo';
  map: Map | undefined;
  view: MapView | undefined;
  mapDiv: HTMLDivElement | undefined;

  constructor() {
  }

  ngOnInit() {
    EsriConfig.apiKey = environment.esriConfigApiKey;

    const mapDivInterval = setInterval(() => {
      const _mapDiv = <HTMLDivElement>document.getElementById("viewDiv");
      if (_mapDiv) {
        clearInterval(mapDivInterval);
        this.mapDiv = _mapDiv;

        this.map = new Map({
          basemap: "arcgis-topographic" // Basemap layer service
        });

        this.view = new MapView({
          map: this.map,
          center: [4.288788, 52.078663], // Longitude, latitude
          zoom: 11, // Zoom level
          container: this.mapDiv // Div element,
        });

        //Trailheads feature layer (points)
        const layer = new FeatureLayer({
          url: "https://services3.arcgis.com/jNF04dtssnue8VcP/arcgis/rest/services/chemicals_measurepoints/FeatureServer/0"
        });

        let heatmapParams: any = {
          layer: layer,
          view: this.view,
          field: "Numeriekew"
        };

        heatmapRendererCreator.createRenderer(heatmapParams).then(function (response: any) {
          console.log(response);
          // Reset the minimum of the statistics as the heatmap will define color range linearly between
          // min and max
          // response.statistics.min = response.statistics.max*0.8;
          layer.renderer = response.renderer;
        });

        this.map.add(layer);

      }
    }, 300);
  }
}
