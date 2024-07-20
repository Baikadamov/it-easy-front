import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import {NgOptimizedImage} from "@angular/common";
import { ProfileComponent } from './components/profile/profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CourseComponent } from './components/course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CourseDetailComponent,
    ProfileComponent,
    PageNotFoundComponent,
    SideBarComponent,
    CourseComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
