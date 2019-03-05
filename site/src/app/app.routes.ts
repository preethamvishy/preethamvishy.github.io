import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', component: ExperienceComponent },
    { path: '**', redirectTo: '' }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);