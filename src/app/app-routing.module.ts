import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {CourseDetailComponent} from "./components/course-detail/course-detail.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {CourseComponent} from "./components/course/course.component";

const routes: Routes = [
  {path: '', redirectTo: "courses", pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'courses', component: CourseDetailComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'course/:id', component: CourseComponent},
  {path: '**', pathMatch: "full", component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
