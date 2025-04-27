import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SisyphusComponent } from './sisyphus/sisyphus.component';
import { RunesComponent } from './runes/runes.component';
import { BioComponent } from './bio/bio.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'sisyphus', component: SisyphusComponent },
  { path: 'runes', component: RunesComponent },
  { path: 'bio', component: BioComponent },
  { path: '**', redirectTo: '' }
];