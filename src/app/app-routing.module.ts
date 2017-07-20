import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotogalaryComponent }   from './photo-galary.component';

const routes: Routes = [
  { path: '', redirectTo: '/photogalary', pathMatch: 'full' },
  { path: 'photogalary',  component: PhotogalaryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}