import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta) { }

  ngOnInit(): void {
    this.meta.addTags([
      { name: 'charset', content: 'UTF-8' }, 
      { name: 'description', content: 'The leading tech recruitment firm in London, helping you to explore the best roles for you or find the talent thta will help your team grow.' }, 
      { name: 'keywords', content: 'home, talent, london, agency, recruitment' }, 
      { name: 'author', content: 'Metro Recruitment' }
    ]);
  }



}
