import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Vacancy } from '../../models/vacancy';

@Component({
  selector: 'app-jobs-search',
  templateUrl: './jobs-search.component.html',
  styleUrls: ['./jobs-search.component.scss']
})
export class JobsSearchComponent implements OnInit {

  currentDate: Date = new Date();
  showOption: boolean = false;
  p: number;
  collection: Vacancy[];  
  searchText: string = '';
  vacancies: any; 

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.vacancies = this.dataService.vacancies;
  }

  public toggleOption() {
    this.showOption = this.showOption === true ? false : true;
  }

  onPageChange(page: number) {
    this.p = page;
  }
}



  

  


