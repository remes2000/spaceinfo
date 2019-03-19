import { Component, OnInit } from '@angular/core';
import { EpicService } from '../../services/epic/epic.service'

@Component({
  selector: 'app-earth-photo',
  templateUrl: './earth-photo.component.html',
  styleUrls: ['./earth-photo.component.css']
})
export class EarthPhotoComponent implements OnInit {

  constructor(
    private epicService: EpicService
  ) { }

  public photos: Array<any> = []
  public currentPhotoUrl: string
  public currentPhotoIndex: number = 0
  public numberOfPhotos: number = 0

  public year: number
  public month: number

  public selectedYear: number
  public selectedMonth: number
  public selectedDay: number

  public availableDates: string[]
  public availableDays: string[]

  ngOnInit() {
    this.epicService.getAvailableDates().subscribe(
      (response: any) => {
        this.availableDates = response
      }
    )
  }

  getAvaliableDays() {
    alert(this.year)
  }

  getPhotos() {
    this.epicService.getPhotos(2019, 3, 11).subscribe(
      (response: any) => {
        response = response.reverse()
        this.currentPhotoIndex = 0
        this.photos = response
        this.currentPhotoUrl = this.epicService.getHalfSizePhotoUrl(2019, 3, 11, response[this.currentPhotoIndex].image)
        this.numberOfPhotos = response.length
      }
    )
  }

  nextPhoto() {
    this.currentPhotoIndex += 1
    this.currentPhotoUrl = this.epicService.getHalfSizePhotoUrl(this.selectedYear, this.selectedMonth, this.selectedDay, this.photos[this.currentPhotoIndex].image)
  }

  previousPhoto() {
    this.currentPhotoIndex -= 1
    this.currentPhotoUrl = this.epicService.getHalfSizePhotoUrl(this.selectedYear, this.selectedMonth, this.selectedDay, this.photos[this.currentPhotoIndex].image)
  }

  displayPhoto(day: string){
    this.selectedDay = parseInt(day)

    this.epicService.getPhotos(this.selectedYear, this.selectedMonth, this.selectedDay).subscribe(
      (response: any) => {
        response = response.reverse()
        this.currentPhotoIndex = 0
        this.photos = response
        this.currentPhotoUrl = this.epicService.getHalfSizePhotoUrl(this.selectedYear, this.selectedMonth, this.selectedDay, response[this.currentPhotoIndex].image)
        this.numberOfPhotos = response.length
      }
    )
  }

  findAvailableDates(){
    this.selectedYear = this.year
    this.selectedMonth = this.month

    const year = this.selectedYear.toString()
    const month = this.selectedMonth>10?this.selectedMonth.toString():"0"+this.selectedMonth

    const dates = this.availableDates.filter( (date: string) => {
      const dateDay = date.split('-')[2]
      const dateMonth = date.split('-')[1]
      const dateYear = date.split('-')[0]

      return dateYear === year && dateMonth === month
    })

    const days = dates.map( (date: string) => {
      return date.split('-')[2]
    })
    
    this.availableDays = days
  }
}
