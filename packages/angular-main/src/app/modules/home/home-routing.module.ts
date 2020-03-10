import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PATH_URL } from '@app/core/configs/url-path.config';
import { AuthGuard } from '@app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: PATH_URL.HOME,
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
