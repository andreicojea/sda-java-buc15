import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInstructorPageComponent } from './add-instructor-page/add-instructor-page.component';
import { CourseDetailsPageComponent } from './course-details-page/course-details-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { ForBusinessComponent } from './for-business/for-business.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InstructorsPageComponent } from './instructors-page/instructors-page.component';

// Array<Route> routes = new Array<Route>();
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'courses',
    component: CoursesPageComponent
  },
  {
    path: 'courses/:id',
    component: CourseDetailsPageComponent
  },
  {
    path: 'instructors',
    component: InstructorsPageComponent,
  },
  {
    path: 'instructors/add',
    component: AddInstructorPageComponent
  },
  {
    path: 'for-business',
    component: ForBusinessComponent
  }
];

// const numere: number[] = [1, 2, 3];

// const primul: number = numere[0];

// const ultimul: number = null;
// // string
// // boolean
// // null
// // undefined

// interface Person {
//   name: string,
//   age: number,
//   hasAPet?: boolean
// }

// const person: Person = {
//   name: "Andrei",
//   age: 30,
//   hasAPet: false
// }

// const person2: Person = {
//   name: "Alice",
//   age: 26
// }

// const cursanti: Person[] = [
//   {
//     name: "Andrei",
//     age: 30,
//     hasAPet: false
//   },
//   {
//     name: "Alice",
//     age: 26
//   }
// ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
