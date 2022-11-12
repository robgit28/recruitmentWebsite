import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blog: any; 
  id: string | null; 

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    //this.blog = this.dataService.getBlog(this.id); 
    // test data way 
    this.blog = this.dataService.blogs.find(blog => blog.id == this.id);
  }

}
