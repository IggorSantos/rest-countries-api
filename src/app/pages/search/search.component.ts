import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HomeServiceService } from 'src/app/services/home-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string = '';
  countries: any;
  exists: boolean = true;

  constructor(private activated: ActivatedRoute,
              private service: HomeServiceService,
              private location: Location
              ) { }

  ngOnInit(): void {
    this.search = this.activated.snapshot.params['search']
    this.getCountries()
    console.log(this.search)
    console.log(this.search.replace(/['"]+/g, ''));
  }

  getCountries(){
    this.service.getSearchCountry(this.search.replace(/['"]+/g, '')).subscribe({
      next: (res: any) => {
        console.log(res)
        this.countries = res
      },
      error: (err: any) => {
        this.exists = false
        console.error(err)
      }
    })
  }

  back(){
    this.location.back()
  }

}
