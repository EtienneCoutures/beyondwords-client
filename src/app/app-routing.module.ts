import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LessonComponent } from './lesson/lesson.component'; 
import { NotFoundComponent } from './not-found/not-found.component';
import { UnitComponent } from './unit/unit.component';
import { AssistanceComponent } from './assistance/assistance.component';
import { AuthService  } from 'src/services/auth.service';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: '', component: DashboardComponent, canActivate: [AuthService] },
  { path: 'lesson/:l_id', component: LessonComponent },
  { path: 'lesson/:l_id/unit/:u_id', component: UnitComponent},
  { path: 'assistance', component: AssistanceComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
  