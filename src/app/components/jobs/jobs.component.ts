import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  host: { '(document:click)': 'handleClick($event)' }
})
export class JobsComponent implements OnInit {

  currentDate: Date = new Date();
  showOption: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  searchText: string = '';

  vacancies = [
    { id: 1, reference: 234, title: "Full Stack Developer", salary: 40000, date: "30/09/2022", location: "London", type: "Permanent", body: "Full Stack Web Developer 40k - 45k and can be Hybrid working. The Full Stack Developer can be based anywhere within a sensible commuting distance to London." },
    { id: 2, reference: 345, title: "Back End Developer", salary: 50000, date: "01/10/2022", location: "Birmingham", type: "Contract", body: "As a Back End Engineer, you'll be responsible for powering the member experience with the design, quality and delivery of our bespoke API and related software components. You will have at least two years' experience with C# development and comfortable being a key contributor in new projects and BAU work." },
    { id: 3, reference: 456, title: "Front End Developer", salary: 35000, date: "20/10/2022", location: "Manchester", type: "Temporary", body: "We are looking for a qualified Front-End Software Engineer to join our development team. You will be responsible for building the 'Client-Side' of our web and mobile applications. The successful applicant will have the skills to translate our business initiatives into functional, appealing, interactive applications." },
    { id: 4, reference: 567, title: "Product Owner", salary: 45000, date: "03/11/2022", location: "Brighton", type: "Permanent", body: "We're looking for a Product Owner to be welcomed into a highly successful, global business. The Product Owner will be working on SaaS based products for household name clients across several sectors of business. This is a strategic role working with engineers, sales, marketing and wider teams within the business." },
    { id: 5, reference: 789, title: "QA Engineer", salary: 40000, date: "08/11/2022", location: "Liverpool", type: "Permanent", body: "We are seeking a Quality Assurance Engineer to be responsible for testing that applications and data solutions meet requirements and are fit for purpose before engaging users in UAT and before deployment, in order to minimize issues in the production environment. " }
  ]

  public toggleOption() {
    this.showOption = this.showOption === true ? false : true;
  }

}
