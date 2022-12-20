import { ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Vacancy } from '../../../models/vacancy';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.scss']
})
export class VacancyListComponent implements OnInit, OnChanges  {

  currentDate: Date = new Date();
  showProfileMenu: boolean = false;
  showMobileSearchFilter: boolean = false;
  p: number;
  collection: Vacancy[];  
  searchText: string = '';
  //searchText = {};
  filter = {};
  //vacancies: any; 
  isLoading: boolean = false; 

  // new 
  @Input() groupFilters: Object;
	@Input() searchByKeyword: string;
	vacancies: any[] = [];
	filteredVacancies: any[] = [];

  constructor(
    private dataService: DataService, 
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    //this.vacancies = this.dataService.vacancies;    
    //this.getVacancies();
    this.loadVacancies();
  }

  ngOnChanges(): void {
		if (this.groupFilters) this.filterVacancyList(this.groupFilters, this.vacancies);
	}

  

  filterVacancyList(filters: any, vacancies: any): void {
		this.filteredVacancies = this.vacancies; 
		const keys = Object.keys(filters);
		const filterVacancy = (vacancy: { [x: string]: string | number; }) => {
			let result = keys.map(key => {
				if (!~key.indexOf('salary')) {
					if(vacancy[key]) {
						return String(vacancy[key]).toLowerCase().startsWith(String(filters[key]).toLowerCase())
					} else {
						return false;
					}
				} else {
          // maybe change this to true or null or whatever 
          return false; 
        }
			});
			result = result.filter(it => it !== undefined);
			if (filters['salaryto'] && filters['salaryfrom']) {
				if (vacancy['salary']) {
					if (+vacancy['salary'] >= +filters['salaryfrom'] && +vacancy['salary'] <= +filters['salaryto']) {
						result.push(true);
					} else {
						result.push(false);
					}
					} else {
						result.push(false);
					}
				}
			return result.reduce((acc, cur: any) => { return acc & cur }, 1)
		}
		this.filteredVacancies = this.vacancies.filter(filterVacancy);
		}

		loadVacancies(): void {
			this.dataService.fetchVacancies()
			    .subscribe(vacancies => this.vacancies = vacancies);
		  this.filteredVacancies = this.filteredVacancies.length > 0 ? this.filteredVacancies : this.vacancies;
		}







  // getVacancies(): void {
  //   this.isLoading = true;
  //   setTimeout( () => { 
  //     this.vacancies = this.dataService.vacancies;
  //   }, 5000 );
  //   this.isLoading = false;
  // }

  // 2_ solution 2 with ngModel and change 
  // updateFilters() {
  //   Object.keys(this.vacancies).forEach(key => this.vacancies[key] === '' ? delete this.vacancies[key] : key);
  //   this.filter = Object.assign({}, this.vacancies);
  // }

  

  public toggleProfileMenu() {
    this.showProfileMenu = this.showProfileMenu === true ? false : true;
  }

  public toggleMobileSearchFilter() {
    this.showMobileSearchFilter = this.showMobileSearchFilter === true ? false : true;
  }

  onPageChange(page: number) {
    this.p = page;
  }
}



  

  



