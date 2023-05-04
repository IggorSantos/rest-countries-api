import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from 'src/app/services/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries: any;
  countriesByRegion: any;
  region: string = 'Region';

  constructor(
    private homeService: HomeServiceService
  ) { }

  ngOnInit(): void {
    this.getCountries()
  }

  getCountries(){
    this.homeService.getCountries().subscribe({
      next: (res: any)=> {
        this.countries = res
        console.log(this.countries)
      },
      error: (error: any) => {
        console.error(error)
      }
    })
  }

  searchRegion(region: string){
    switch (region) {
      case 'africa':
        this.region = 'Africa';        
        break;
      case 'america':
        this.region = 'America';          
        break;
      case 'asia':
        this.region = 'Asia';         
        break;
      case 'europe':
        this.region = 'Europe';         
        break;      
      case 'oceania':
        this.region = 'Oceania';         
        break;

      default:
        break;
    }
    this.homeService.getCountriesByRegion(region).subscribe({
      next: (res: any)=> {
        this.countries = res
        console.log(this.countriesByRegion)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

}
