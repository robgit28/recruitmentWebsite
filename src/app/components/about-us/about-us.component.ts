import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private meta: Meta) { }

  ngOnInit(): void {
    this.meta.addTags([
      { name: 'charset', content: 'UTF-8' }, 
      { name: 'description', content: 'Let us tell you what we value as a recruitment firm, what we can offer and what makes us different.' }, 
      { name: 'keywords', content: 'about, us, different, recruitment' }, 
      { name: 'author', content: 'Metro Recruitment' }
    ]);
  }

}
