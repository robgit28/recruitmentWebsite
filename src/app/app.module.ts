import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JobsModule } from './components/jobs/jobs.module';

import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { NgxPaginationModule } from 'ngx-pagination';

import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AppNotFoundComponent } from './components/app-not-found/app-not-found.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { ClientComponent } from './components/client/client.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { JobComponent } from './components/job/job.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
//import { JobsComponent } from './components/jobs/jobs.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
//import { SearchPipe } from './pipes/search.pipe';
import { SearchbarComponent } from './components/shared/searchbar/searchbar.component';
import { SharedModule } from './components/shared/shared.module';
//import { SearchComponent } from './components/search/search.component';
//import { VacancyListComponent } from './components/vacancy-list/vacancy-list.component';

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  position: 'bottom-right',
  palette: {
    popup: {
      background: '#303F9F'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'classic',
  type: 'opt-out'
};

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent, 
    AppNotFoundComponent,
    BlogComponent, 
    BlogsComponent,
    CandidateComponent,
    ClientComponent,
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    JobComponent,
    //JobsComponent,
    TeamComponent,
    TestimonialsComponent,
    SearchbarComponent,
    //SearchPipe,
    //SearchComponent,
    //VacancyListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    JobsModule, 
    //SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    NgxPaginationModule
  ],
  exports: [
    
    //HeaderComponent
  ], 
  providers: [
    Meta
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
