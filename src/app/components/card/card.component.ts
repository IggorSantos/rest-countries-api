import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('country') country: any

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigatePage(id: string){
    this.route.navigate([
      '/country-page',
      { country:JSON.stringify(id)}
    ])    
  }

}
