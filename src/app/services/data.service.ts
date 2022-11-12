import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from '../models/vacancy';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchOption = [];
  public postsData: Vacancy[];
  vacancyUrl: string = "https://jsonplaceholder.typicode.com/posts";
  id: number; 
  vacancies = [
    { id: "1", reference: 234, title: "Full Stack Developer", salary: 40000, date: "30/09/2022", location: "London", type: "Permanent", body: "Full Stack Web Developer 40k - 45k and can be Hybrid working. The Full Stack Developer can be based anywhere within a sensible commuting distance to London." },
    { id: "2", reference: 345, title: "Back End Developer", salary: 50000, date: "01/10/2022", location: "Birmingham", type: "Contract", body: "As a Back End Engineer, you'll be responsible for powering the member experience with the design, quality and delivery of our bespoke API and related software components. You will have at least two years' experience with C# development and comfortable being a key contributor in new projects and BAU work." },
    { id: "3", reference: 456, title: "Front End Developer", salary: 35000, date: "20/10/2022", location: "Manchester", type: "Temporary", body: "We are looking for a qualified Front-End Software Engineer to join our development team. You will be responsible for building the 'Client-Side' of our web and mobile applications. The successful applicant will have the skills to translate our business initiatives into functional, appealing, interactive applications." },
    { id: "4", reference: 567, title: "Product Owner", salary: 45000, date: "03/11/2022", location: "Brighton", type: "Permanent", body: "We're looking for a Product Owner to be welcomed into a highly successful, global business. The Product Owner will be working on SaaS based products for household name clients across several sectors of business. This is a strategic role working with engineers, sales, marketing and wider teams within the business." },
    { id: "5", reference: 789, title: "QA Engineer", salary: 40000, date: "08/11/2022", location: "Liverpool", type: "Permanent", body: "We are seeking a Quality Assurance Engineer to be responsible for testing that applications and data solutions meet requirements and are fit for purpose before engaging users in UAT and before deployment, in order to minimize issues in the production environment. " }
  ]
  // include synopsis and body? 
  blogs = [
    { id: "1", mainImage: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80", type: "Article", title: "Boost your conversion rate", length: 6, date: "Sept 16, 2022", author: "Roel Aufderehar", authorPhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", body: "Website conversion rates average around 2 percent. For every 100 visitors, you can expect to only get 2 customers. And honestly, that's a pretty good conversion rate. Many sites only have a 0.1 to 0.2% conversion rate. That takes 1000 visitors to get 1 customer." },
    { id: "2", mainImage: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80", type: "Video", title: "How to use search engine optimization to drive sales", length: 4, date: "Mar 10, 2020", author: "Brenna Goyette", authorPhoto: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", body: "Remember when you had to leave the house to go shopping? What a hassle that was. But then, way back in 1982, Boston Computer Exchange was launched as the first ecommerce site and the convenience of shopping in your underwear was born." },
    { id: "3", mainImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80", type: "Case Study", title: "Improve your customer experience", length: 11, date: "Feb 12, 2020", author: "Daniela Metz", authorPhoto: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", body: "We surveyed 1,920 business professionals and asked them what the top business priority is for the next 5 years - and once again, the same answer came out on top. Can you guess what the top priority for a business is? If you guessed 'customer experience' (or CX), you guessed right." },  
  ]
  employees = [
    { id: "1", name: "Dany Bailey", profileImage: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80", roleTitle: "Managing Director", socialFacebook: "", socialInstagram: "", socialTwitter: "", socialGithub: "", synopsis: "Dany established Metro Recruitment in 2015 after several years working within IT recruitment & sales. He enjoys spending time with family, cooking & rock climbing." },
    { id: "2", name: "Lucy Carter", profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80", roleTitle: "Deputy Managing Director", socialFacebook: "https://www.facebook.com/", socialInstagram: "https://www.instagram.com/", socialTwitter: "https://twitter.com/?lang=en", socialGithub: "https://github.com/", synopsis: "Lucy has spent her career recruiting for some of the world's largest blue-chip firms across the Americas, Europe & Asia. She loves walks with her dog, Bruno, hanging out with friends and reading." },
    { id: "3", name: "Jade Bradley", profileImage: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80", roleTitle: "Principle Consultant", socialFacebook: "https://www.facebook.com/", socialInstagram: "https://www.instagram.com/", socialTwitter: "https://twitter.com/?lang=en", socialGithub: "https://github.com/", synopsis: "Jade has a recruitment career spanning industries such as fashion, finance and pharmaceuticals. She loves holidays (anywhere sunny), mojitos and training for marathons." },
    { id: "4", name: "Edgar Photini", profileImage: "https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80", roleTitle: "Account Manager", socialFacebook: "https://www.facebook.com/", socialInstagram: "https://www.instagram.com/", socialTwitter: "https://twitter.com/?lang=en", socialGithub: "https://github.com/", synopsis: "Edgar grew up in the Netherlands and has worked as a florist, sky diving instructor and a luxury personal shopper. He enjoys exploring London, DJing and good food." }, 
    { id: "5", name: "Sarah Beatens", profileImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", roleTitle: "Senior Consultant", socialFacebook: "https://www.facebook.com/", socialInstagram: "https://www.instagram.com/", socialTwitter: "https://twitter.com/?lang=en", socialGithub: "https://github.com/", synopsis: "Sarah has worked both in-house and agency side and has a wealth of experience across a range of departments, especially at senior level. She loves spending time with her family, gardening and cycling." },  
    { id: "6", name: "Wilson Moore", profileImage: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", roleTitle: "Consultant", socialFacebook: "https://www.facebook.com/", socialInstagram: "https://www.instagram.com/", socialTwitter: "https://twitter.com/?lang=en", socialGithub: "https://github.com/", synopsis: "Wilson manages the contract desk for Metro Recruitment. He loves boxing, science-fiction and his cat, Aubrey." },   
  ]
  

  constructor(
    private http: HttpClient
  ) { }

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.vacancyUrl);
  }

  // getVacancy(): Observable<Vacancy> {
  //   return this.http.get<Vacancy>(this.id);
  // }



}


       
   
      

