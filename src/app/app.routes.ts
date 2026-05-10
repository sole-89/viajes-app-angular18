import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];