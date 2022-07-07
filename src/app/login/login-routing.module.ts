import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'moderator', component: ModeratorComponent,
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
