import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  constructor(private meta: Meta) { }

  ngOnInit(): void {
    this.meta.addTags([
      { name: 'charset', content: 'UTF-8' }, 
      { name: 'description', content: 'As a candidate you want a recruitment agency that will represent you in the best light possible, well that is us.' }, 
      { name: 'keywords', content: 'candidate, process, represent, recruitment' }, 
      { name: 'author', content: 'Metro Recruitment' }
    ]);
  }

}
