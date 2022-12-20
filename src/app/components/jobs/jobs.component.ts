import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  searchText: string = '';
  filters: Object;

  // new 
  searchWord: string =''; 

  //@Output() searchcriteria  = new EventEmitter<String>();
  @Output() searchcriteria: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  updateFilters() {
    this.searchcriteria.emit(this.searchWord)
  }

}
