import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogs: any; 

  constructor(private dataService: DataService, 
    private meta: Meta) { }

  ngOnInit(): void {
    this.meta.addTags([
      { name: 'charset', content: 'UTF-8' }, 
      { name: 'description', content: 'Professional career advice from our blog on how to grow within your new or current team' }, 
      { name: 'keywords', content: 'blog, career, advice, professional, recruitment' }, 
      { name: 'author', content: 'Metro Recruitment' }
    ]);

    this.blogs = this.dataService.blogs;
  }

}
