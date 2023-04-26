import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from 'src/app/services/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries: any;

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

}
