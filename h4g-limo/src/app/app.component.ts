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
  layer: FeatureLayer;

  chemicalList = [
    {
      viewValue: "ammoniak",
      value: "ammoniak"
    },
    {
      viewValue: "acenafteen",
      value: "acenafteen"
    },
    {
      viewValue: "ammonium",
      value: "ammonium"
    },
    {
      viewValue: "chlorofyl-a",
      value: "chlorofyl-a"
    },
    {
      viewValue: "koper",
      value: "koper"
    },
    {
      viewValue: "zink",
      value: "zink"
    }
  ];

  monthList = [
    {
      viewValue: "JAN - 2019",
      value: 1
    }
  ];

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
        this.layer = new FeatureLayer({
          url: "https://services3.arcgis.com/jNF04dtssnue8VcP/arcgis/rest/services/chemicals_measurepoints/FeatureServer/0",
          outFields: ["Paramete_2", "Paramete_3", "MonsterC_1"],
          featureReduction: {
            type: "cluster"
          },
        });

        this.map.add(this.layer);
        var filter = document.getElementById("chemicalFilter");
        // filters the layer using a definitionExpression
        // based on a religion selected by the user
        filter.addEventListener("change", (evt: any) => {
          var newValue = evt.target.value;
          this.updateDefinitionExpression(newValue);
        });


        //#region Abhinav - Heatmap
        // let heatmapParams: any = {
        //   layer: layer,
        //   view: this.view,
        //   field: "Numeriekew"
        // };

        // heatmapRendererCreator.createRenderer(heatmapParams).then(function (response: any) {
        //   console.log(response);
        //   // Reset the minimum of the statistics as the heatmap will define color range linearly between
        //   // min and max
        //   // response.statistics.min = response.statistics.max*0.8;
        //   layer.renderer = response.renderer;
        // });

        // this.map.add(layer);
        //#endregion
      }
    }, 300);
  }

  updateDefinitionExpression(value) {
    // var definitionExpression = value ? "Paramete_2 = '" + value + "'" : null;
    var definitionExpression = value ? `Paramete_2 = '${value}'` : null;
    this.layer.definitionExpression = definitionExpression;
    // (<any>this.layer).setDefinitionExpression(definitionExpression);
    // (<any>this.map).infoWindow.hide();
  }
}
