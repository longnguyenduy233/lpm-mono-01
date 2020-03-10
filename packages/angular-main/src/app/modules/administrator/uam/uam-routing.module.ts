import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UamComponent } from './uam/uam.component';


const routes: Routes = [
  {
    path: '',
    component: UamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UamRoutingModule { }
