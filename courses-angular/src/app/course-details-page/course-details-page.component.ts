import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDataService } from '../course-data.service';
import { Course } from '../types/course';

@Component({
  selector: 'app-course-details-page',
  templateUrl: './course-details-page.component.html',
  styleUrls: ['./course-details-page.component.scss']
})
export class CourseDetailsPageComponent implements OnInit {

  course: Course;
  error: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private courseDataService: CourseDataService
  ) { }

  ngOnInit(): void {
    // alert(this.route.snapshot.params.id);
    const courseId = this.activeRoute.snapshot.params.id;
    this.courseDataService.getOne(courseId).subscribe(response => {
      this.course = response;
    }, error => {
      this.error = error;
    });
  }

  goBack() {
    this.router.navigateByUrl("/courses");
  }

}
