import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private meta: Meta) { }

  ngOnInit(): void {
    this.meta.addTags([
      { name: 'charset', content: 'UTF-8' }, 
      { name: 'description', content: 'Why not work with a recruitment firm that will get to know your business and find the sorts of people who will really help it gorw?' }, 
      { name: 'keywords', content: 'client, empower, team, recruitment' }, 
      { name: 'author', content: 'Metro Recruitment' }
    ]);
  }

}
