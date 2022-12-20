import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobsComponent } from './jobs.component';
import { SearchComponent } from '../search/search.component';
import { VacancyListComponent } from '../vacancy-list/vacancy-list.component';
import { DataService } from '../../services/data.service';
import { SearchPipe } from '../../pipes/search.pipe';
import { SearchBarPipe } from '../../pipes/searchBar.pipe'; 
import { JobsRoutes } from './jobs-routing.module';
//import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    //SharedModule,  
    JobsRoutes 
],
  declarations: [ 
    JobsComponent, 
    SearchComponent, 
    VacancyListComponent, 
    SearchPipe,
    SearchBarPipe, 
],
  providers: [ 
    DataService 
]
})
export class JobsModule { }