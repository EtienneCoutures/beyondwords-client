import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../app/signin/signin.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { LessonComponent } from '../app/lesson/lesson.component'; 
import { NotFoundComponent } from '../app/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: '', component: DashboardComponent },
  { path: 'lesson/:id', component: LessonComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
