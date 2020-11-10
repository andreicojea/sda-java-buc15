import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InstructorDataService } from '../instructor-data.service';
import { Instructor } from '../types/instructor';

@Component({
  selector: 'app-add-instructor-page',
  templateUrl: './add-instructor-page.component.html',
  styleUrls: ['./add-instructor-page.component.scss']
})
export class AddInstructorPageComponent implements OnInit {

  // testFormControl = new FormControl('', [Validators.required, Validators.maxLength(20), Validators.email]);
  // testFormControl2 = new FormControl('', [Validators.required, Validators.maxLength(20), Validators.email]);

  // "id": 5,
  // "picture": "https://img-b.udemycdn.com/user/75x75/599932_71aa_5.jpg",
  // "name": "Tim Buchalka",
  // "topics": "Python, Java",
  // "rating": 4.5,
  // "students": 810292,
  // "courses": 10

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    topics: new FormControl(''),
    picture: new FormControl('')
  });

  constructor(
    private instructorDataService: InstructorDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save() {
    const newInstructor: Instructor = {
      id: null,
      name: this.form.value.name,
      topics: this.form.value.topics,
      picture: this.form.value.picture,
      rating: null,
      courses: 0,
      students: 0
    };
    this.instructorDataService.save(newInstructor).subscribe(() => {
      alert('Instructor saved.');
      this.router.navigateByUrl('/instructors');
    });
  }

}
