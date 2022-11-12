import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogs: any; 

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.blogs = this.dataService.blogs;
  }

}
