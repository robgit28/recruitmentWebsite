import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs.component';

const routes: Routes = [
  { path: '', component: JobsComponent }
];

export const JobsRoutes = RouterModule.forChild(routes);