import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppNotFoundComponent } from './components/app-not-found/app-not-found.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { ClientComponent } from './components/client/client.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { JobComponent } from './components/job/job.component';
//import { JobsComponent } from './components/jobs/jobs.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
//import { SearchComponent } from './components/search/search.component';
//import { VacancyListComponent } from './components/vacancy-list/vacancy-list.component';

const routes: Routes = [
  {
    path: "about-us",
    component: AboutUsComponent
  },
  {
    path: "blog/:id",
    component: BlogComponent
  },
  {
    path: "blogs",
    component: BlogsComponent
  },
  {
    path: "candidate",
    component: CandidateComponent
  },
  {
    path: "client",
    component: ClientComponent
  },
  {
    path: "contact-us",
    component: ContactUsComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "job/:id",
    component: JobComponent
  },
  // {
  //   path: "jobs",
  //   component: JobsComponent
  // },
  { 
    path: "jobs", 
    loadChildren: () => import('./components/jobs/jobs.module').then(x => x.JobsModule)
    //loadChildren: './components/jobs/jobs.module#JobsModule' 
  },
  {
    path: "team",
    component: TeamComponent
  },
  {
    path: "testimonials",
    component: TestimonialsComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  // {
  //   path: "**",
  //   component: AppNotFoundComponent
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

