import { Component, Input, OnInit } from '@angular/core';
import { Instructor } from '../types/instructor';

@Component({
  selector: 'app-instructor-card',
  templateUrl: './instructor-card.component.html',
  styleUrls: ['./instructor-card.component.scss']
})
export class InstructorCardComponent implements OnInit {

  @Input() instructor: Instructor;

  constructor() { }

  ngOnInit(): void {
  }

}
