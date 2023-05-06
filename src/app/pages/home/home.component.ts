import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HomeServiceService } from 'src/app/services/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup | any = '';
  countries: any;
  countriesByRegion: any;
  region: string = 'Region';

  constructor(
    private homeService: HomeServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm()
    this.getCountries()
  }

  buildForm(){
    this.form = new FormGroup({
      term: new FormControl(' ')
    })
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

  searchCountry(){
    console.log(this.form.value.term)
    if(this.form.value.term == ' '){
      console.log("String vazia")
    }else{
      this.router.navigate(['/search', { search:JSON.stringify(this.form.value.term)}])
    }
    
  }

  searchCountryPress(event: any){
    console.log(event.target.value)
    console.log(this.form.value)
    this.router.navigate(['/search', { search:JSON.stringify(this.form.value.term)}])
  }

}
