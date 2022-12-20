import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public showMenu = false;
  
  constructor() { }

  ngOnInit(): void {
    
  }
  
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  
}
