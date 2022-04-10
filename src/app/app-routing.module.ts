import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppNotFoundComponent } from './components/app-not-found/app-not-found.component';
import { BlogComponent } from './components/blog/blog.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { ClientComponent } from './components/client/client.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

const routes: Routes = [
  {
    path: "blog",
    component: BlogComponent
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
    path: "jobs",
    component: JobsComponent
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
    path: "**",
    component: AppNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
