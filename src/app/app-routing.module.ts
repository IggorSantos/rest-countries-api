import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path: '', loadChildren:() => import('./pages/home/home.module').then(m => m.HomeModule) },
  {path: 'country-page', loadChildren:() => import('./pages/country-page/country-page.module').then(m => m.CountryPageModule) },
  {path: 'search', loadChildren:() => import('./pages/search/search.module').then(m => m.SearchModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
