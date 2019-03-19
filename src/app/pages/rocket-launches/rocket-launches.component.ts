import { Component, OnInit } from '@angular/core';
import { RocketLaunchService } from '../../services/rocket-launch/rocket-launch.service'
import { tileLayer, latLng, circle } from 'leaflet'
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-rocket-launches',
  templateUrl: './rocket-launches.component.html',
  styleUrls: ['./rocket-launches.component.css']
})
export class RocketLaunchesComponent implements OnInit {

  constructor(
    private rocketLaunchService: RocketLaunchService,
    private lightbox: Lightbox
  ) { }

  public albums: Array<{src: string, caption: string, thumb: string}> = []
  public launches: Array<any>
  public selectedLaunch: any
  public mapOptions: object = {
    layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 1,
    center: latLng(52.210153, 19.175865),
  }
  public mapLaunchPad: any
  public offset: number = 0

  ngOnInit() {

    this.rocketLaunchService.getLaunches(5, this.offset).subscribe(
      (response: any) => {
        this.launches = response.launches
        this.selectedLaunch = this.launches[0]

        const latitude = this.selectedLaunch.location.pads[0].latitude
        const longitude = this.selectedLaunch.location.pads[0].longitude
        this.mapLaunchPad = circle([latitude, longitude], { radius: 500000 })
      }
    )

  }

  selectLaunch(id: number){
    console.log(this.launches.filter(l => l.id === id)[0])
    this.selectedLaunch = this.launches.filter(l => l.id === id)[0]

    const latitude = this.selectedLaunch.location.pads[0].latitude
    const longitude = this.selectedLaunch.location.pads[0].longitude

    this.mapLaunchPad = circle([latitude, longitude], { radius: 500000 })
  }

  getPreviousLaunches(){
    this.offset -= 5
    this.rocketLaunchService.getLaunches(5, this.offset).subscribe(
      (response: any) => {
        this.launches = response.launches
      }
    )
  }

  getNextLaunches(){

    this.offset += 5
    this.rocketLaunchService.getLaunches(5, this.offset).subscribe(
      (response: any) => {
        this.launches = response.launches
      }
    )

  }

  open(url: string, caption: string){
    const album = {
      src: url,
      caption,
      thumb: url
    }
    this.albums = [album]
    this.lightbox.open(this.albums, 0)
  }
}
