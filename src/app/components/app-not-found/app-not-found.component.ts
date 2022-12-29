import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-app-not-found',
  templateUrl: './app-not-found.component.html',
  styleUrls: ['./app-not-found.component.scss']
})
export class AppNotFoundComponent implements OnInit {

  constructor(private meta: Meta) { }

  ngOnInit(): void {
    this.meta.addTags([
      { name: 'charset', content: 'UTF-8' }, 
      { name: 'description', content: '404 Page not found.' }, 
      { name: 'keywords', content: '404' }, 
      { name: 'author', content: 'Metro Recruitment' }
    ]);
  }

}
