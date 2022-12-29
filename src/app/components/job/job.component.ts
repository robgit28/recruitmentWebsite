import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Vacancy } from '../../models/vacancy';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  currentDate: Date = new Date();
  //vacancy: Vacancy;
  vacancy: any; 
  id: string | null; 
  
  constructor(private route: ActivatedRoute, private dataService: DataService) { }
  

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    //this.vacancy = this.dataService.getVacancy(this.id); 
    // test data way 
    this.vacancy = this.dataService.vacancies.find(vacancy => vacancy.id == this.id);
  }

}


