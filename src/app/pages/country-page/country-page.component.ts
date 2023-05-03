import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeServiceService } from 'src/app/services/home-service.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {
  nameCountry: string = '';

  constructor(private router: ActivatedRoute, private service: HomeServiceService) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.nameCountry = JSON.parse(this.router.snapshot.params['country']);
      console.log(this.nameCountry)
    })
    this.getCountry()
  }

  getCountry(){
    this.service.getCountry(this.nameCountry).subscribe({
      next: (res: any)=> {
        console.log(res)
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }

}
