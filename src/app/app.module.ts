import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { NgxPaginationModule } from 'ngx-pagination';

import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { ClientComponent } from './components/client/client.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { JobComponent } from './components/job/job.component';
import { JobsSearchComponent } from './components/jobs-search/jobs-search.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { AppNotFoundComponent } from './components/app-not-found/app-not-found.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SearchPipe } from './pipes/search.pipe';
import { SearchbarComponent } from './components/shared/searchbar/searchbar.component';
import { HeaderComponent } from './components/shared/header/header.component';

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
    TeamComponent,
    TestimonialsComponent,
    SearchbarComponent,
    SearchPipe,
    JobComponent,
    JobsSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
