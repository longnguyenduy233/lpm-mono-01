import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './core/guards/login.guard';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { AuthGuard } from './core/guards/auth.guard';
import { PATH_URL } from './core/configs/url-path.config';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: PATH_URL.LOGIN,
    component: SignInComponent,
    canActivate: [LoginGuard]
  },
  {
    path: PATH_URL.UAM,
    loadChildren: './modules/administrator/uam/uam.module#UamModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
