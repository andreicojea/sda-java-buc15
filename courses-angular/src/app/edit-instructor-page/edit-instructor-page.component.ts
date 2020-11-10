import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InstructorDataService } from '../instructor-data.service';

@Component({
  selector: 'app-edit-instructor-page',
  templateUrl: './edit-instructor-page.component.html',
  styleUrls: ['./edit-instructor-page.component.scss']
})
export class EditInstructorPageComponent implements OnInit {

  // "id": 5,
  // "picture": "https://img-b.udemycdn.com/user/75x75/599932_71aa_5.jpg",
  // "name": "Tim Buchalka",
  // "topics": "Python, Java",
  // "rating": 4.5,
  // "students": 810292,
  // "courses": 10
  editForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    picture: new FormControl(),
    topics: new FormControl(),
    rating: new FormControl(),
    students: new FormControl(),
    courses: new FormControl(),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private instructorDataService: InstructorDataService
  ) { }

  ngOnInit(): void {
    // id din ruta
    const instructorId = this.activatedRoute.snapshot.params.id;

    this.instructorDataService.getOne(instructorId).subscribe(response => {
      this.editForm.patchValue(response);
    });
  }

  update() {
    this.instructorDataService.update(this.editForm.value).subscribe(response => {
      alert('Instructor saved.')
    }, () => {
      alert('ERROR: Failed to save instructor.')
    });
  }

}
