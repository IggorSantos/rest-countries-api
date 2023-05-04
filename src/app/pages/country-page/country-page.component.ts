import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HomeServiceService } from 'src/app/services/home-service.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {
  country: any;
  languages: any;
  idCountry: string = '';

  constructor(private router: ActivatedRoute,
              private service: HomeServiceService,
              private location: Location
              ) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.idCountry = JSON.parse(this.router.snapshot.params['country']);
      console.log(this.idCountry)
    })
    this.getCountry()
  }

  getCountry(){
    this.service.getCountry(this.idCountry).subscribe({
      next: (res: any)=> {
        this.country = res
        console.log(this.country)
        this.getLanguages(this.country)
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }

  getLanguages(country: any){
    this.languages = Object.values(this.country[0].languages)
    console.log(this.languages)
  }

  back(){
    this.location.back()
  }

}
