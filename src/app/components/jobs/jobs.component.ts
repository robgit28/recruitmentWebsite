import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  currentDate: Date = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

  vacancies: {
    id: 1, 
    reference: 1, 
    title: "Web Developer"
    salary: 30000
    date: "30/04/2022", 
    location: "London", 
    type: "Permanent", 
    body: "Body text"
  }

}
