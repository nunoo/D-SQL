import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results = false;

  constructor() { }

  ngOnInit() {
  }
  

  onClick(): any{
    console.log('click is working')
    this.results = true;
    return false
  }
}
