import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AiConfigPageComponent } from './ai-config-page/ai-config-page.component';

export const routes: Routes = [
  { path: 'index', component: HomePageComponent },
  { path: 'config', component: AiConfigPageComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
