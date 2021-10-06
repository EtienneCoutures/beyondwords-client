import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnitComponent } from './unit/unit.component';
import { SigninComponent } from './signin/signin.component';

import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { LayoutModule } from '@angular/cdk/layout';

import { HelperService } from '../services/helper.service';
import { LessonComponent } from './lesson/lesson.component';

import { CategorieItemComponent } from '../components/categorie-item/categorie-item.component';
import { UnitItemComponent } from '../components/unit-item/unit-item.component';
import { UnitContentItemComponent } from '../components/unit-content-item/unit-content-item.component';

import { SafeUrlPipe } from '../pipes/safe-url.pipe';
import { AssistanceComponent } from './assistance/assistance.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    LessonComponent,
    AssistanceComponent,
    CategorieItemComponent,
    UnitItemComponent,
    NotFoundComponent,
    UnitComponent,
    UnitContentItemComponent,
    SafeUrlPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule,
    MatProgressBarModule,
    MatIconModule,
    MatGridListModule,
    MatRippleModule,
    MatDialogModule,
    LayoutModule,
    PdfViewerModule,

  ],
  providers: [
    HelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
