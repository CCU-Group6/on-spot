import { Component, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral} from '@agm/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public lat =  38.73674521461237;
  public lng =  -9.1386079788208;
  public bool = true;


  public Zones: Object = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -9.14339303970337,
                38.741816531043206
              ],
              [
                -9.142019748687744,
                38.739088441876866
              ],
              [
                -9.142320156097412,
                38.73898801942805
              ],
              [
                -9.142062664031982,
                38.7376657773492
              ],
              [
                -9.138543605804443,
                38.738134422911926
              ],
              [
                -9.137513637542725,
                38.73786662582405
              ],
              [
                -9.136676788330078,
                38.73739797850408
              ],
              [
                -9.133822917938232,
                38.73756535289994
              ],
              [
                -9.133329391479492,
                38.74210104967876
              ],
              [
                -9.139015674591064,
                38.74250272111668
              ],
              [
                -9.14339303970337,
                38.741816531043206
              ]
            ]
          ]
        }
      }
    ]
  };

  constructor() { }

  ngOnInit() {

  }

  onChoseLocation(event){
    console.log(event);
    
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }


  mapIdle() {
    console.log('idle');
  }
}
