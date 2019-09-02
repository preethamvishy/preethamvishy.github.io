import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    { path: '', component: AppComponent },
    { path: '**', redirectTo: '' }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);