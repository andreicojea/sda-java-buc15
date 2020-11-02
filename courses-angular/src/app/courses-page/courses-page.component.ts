import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseDataService } from '../course-data.service';
import { Course } from '../types/course';

// class Test {
//   String ceva;
//   Test(String ceva) {
//     this.ceva = ceva;
//   }
// }

// Test unObiect = new Text("bla bla");

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

  courses: Course[] = [];

  constructor(
    private courseDataService: CourseDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.courseDataService.getAll().subscribe(response => {
      this.courses = response;
    });

    // this.httpClient.get<Course[]>('http://localhost:3000/instructors').subscribe(response => {
    //   console.log(response);
    // });
  }

  goToCourseDetails(course: Course) {
    this.router.navigateByUrl(`/courses/${course.id}`);
  }

}
