import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  employees: any[]; 

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.employees = this.dataService.employees;
  }

}
