import { Component, OnInit } from '@angular/core';
import { IssService } from '../../services/iss/iss.service'
import { GeocodingService } from '../../services/geocoding/geocoding.service'
import { IssPosition } from 'src/app/models/issPosition.model';
import { IssCrew } from 'src/app/models/issCrew.model';
import { tileLayer, latLng, LatLng, circle } from 'leaflet'

@Component({
  selector: 'app-iss',
  templateUrl: './iss.component.html',
  styleUrls: ['./iss.component.css']
})
export class IssComponent implements OnInit {

  constructor(
    private issService: IssService,
    private geocodingService: GeocodingService
  ) { }

  public latitude: number
  public longitude: number
  public issCrew: Array<{name: string, craft: string}> = []

  public mapOptions: object = {
    layers: [
        tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png')
    ],
    zoom: 2,
    center: latLng(40.866667, 34.566667)
  }
  public mapStartPoint: LatLng
  public mapIss: any
  public mapIssTiny: any

  public locationInput: string
  public numberOfFlightsInput: number

  ngOnInit() {
    this.listenIssPosition()
    this.issService.getIssCrew().subscribe(
      (crew: IssCrew) => {
        this.issCrew = crew.people.filter(p => p.craft === "ISS")
      }
    )
  }

  private listenIssPosition = () => {
    this.issService.getIssPosition().subscribe(
      (position: IssPosition) => {
        this.latitude = position.iss_position.latitude
        this.longitude = position.iss_position.longitude

        this.mapIss = circle([this.latitude, this.longitude], { radius: 500000, fillColor: 'white', color: 'white' })
        this.mapIssTiny = circle([this.latitude, this.longitude], { radius: 100, fillColor: 'white', color: 'white' })

        setTimeout(this.listenIssPosition, 1000)
      }
    )
  }

  private findFlights = () => {
    this.geocodingService.geocode(this.locationInput).subscribe((response: any) => {
      const latitude = response[0].lat
      const longitude = response[0].lon

      this.issService.getIssFlights(latitude, longitude, 5).subscribe((issResponse: any) => {
        console.log(issResponse)
      })
      
    })
  }

  public scrollTo(id: string){
    const element = document.getElementById(id)
    element.scrollIntoView()
  }

}
