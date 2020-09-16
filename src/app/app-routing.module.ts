import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroTreeComponent } from './intro-tree/intro-tree.component';
import { MainTreeComponent } from './main-tree/main-tree.component';

const routes: Routes = [
  { path: '', component:  IntroTreeComponent},
  { path: 'tree', component:  MainTreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
