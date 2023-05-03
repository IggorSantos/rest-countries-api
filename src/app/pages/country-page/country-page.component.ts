import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeServiceService } from 'src/app/services/home-service.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {
  country: any;
  idCountry: string = '';

  constructor(private router: ActivatedRoute, private service: HomeServiceService) { }

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
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }

}
