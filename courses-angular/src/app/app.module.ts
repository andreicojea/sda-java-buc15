import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InstructorsPageComponent } from './instructors-page/instructors-page.component';
import { ForBusinessComponent } from './for-business/for-business.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseDetailsPageComponent } from './course-details-page/course-details-page.component';
import { InstructorCardComponent } from './instructor-card/instructor-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourseCardComponent,
    CoursesPageComponent,
    HomePageComponent,
    InstructorsPageComponent,
    ForBusinessComponent,
    CourseDetailsPageComponent,
    InstructorCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
