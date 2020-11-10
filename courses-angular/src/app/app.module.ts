import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InstructorsPageComponent } from './instructors-page/instructors-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseDetailsPageComponent } from './course-details-page/course-details-page.component';
import { InstructorCardComponent } from './instructor-card/instructor-card.component';
import { AddInstructorPageComponent } from './add-instructor-page/add-instructor-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditInstructorPageComponent } from './edit-instructor-page/edit-instructor-page.component';
import { BusinessPageComponent } from './business-page/business-page.component';
import { PlusMinusComponent } from './plus-minus/plus-minus.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourseCardComponent,
    CoursesPageComponent,
    HomePageComponent,
    InstructorsPageComponent,
    BusinessPageComponent,
    CourseDetailsPageComponent,
    InstructorCardComponent,
    AddInstructorPageComponent,
    EditInstructorPageComponent,
    PlusMinusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
