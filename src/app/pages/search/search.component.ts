import { Component, OnInit } from '@angular/core';
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

  constructor(private activated: ActivatedRoute, private service: HomeServiceService) { }

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
        console.error(err)
      }
    })
  }

}
