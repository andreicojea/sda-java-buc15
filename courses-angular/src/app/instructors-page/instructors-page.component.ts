import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstructorDataService } from '../instructor-data.service';
import { Instructor } from '../types/instructor';

@Component({
  selector: 'app-instructors-page',
  templateUrl: './instructors-page.component.html',
  styleUrls: ['./instructors-page.component.scss']
})
export class InstructorsPageComponent implements OnInit {

  instructors: Instructor[] = [];

  constructor(
    private instructorDataService: InstructorDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.instructorDataService.getAll().subscribe(response => {
      this.instructors = response;
    });
  }

  goToEdit(instructor: Instructor) {
    // console.log('Edit', instructor);
    this.router.navigateByUrl(`/instructors/${instructor.id}`);
  }

  deleteInstructor(instructor: Instructor) {
    // console.log('Delete', instructor);
    const ok = confirm(`Are you sure you want to delete ${instructor.name}?`);

    if (ok) {
      this.instructorDataService.delete(instructor).subscribe(() => {
        this.loadAll();
      });
    }
  }

}
