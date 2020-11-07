import { Component, OnInit } from '@angular/core';
import { InstructorDataService } from '../instructor-data.service';
import { Instructor } from '../types/instructor';

@Component({
  selector: 'app-instructors-page',
  templateUrl: './instructors-page.component.html',
  styleUrls: ['./instructors-page.component.scss']
})
export class InstructorsPageComponent implements OnInit {

  instructors: Instructor[] = [];

  constructor(private instructorDataService: InstructorDataService) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.instructorDataService.getAll().subscribe(response => {
      this.instructors = response;
    });
  }

}
