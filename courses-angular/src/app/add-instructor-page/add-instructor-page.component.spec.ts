import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstructorPageComponent } from './add-instructor-page.component';

describe('AddInstructorPageComponent', () => {
  let component: AddInstructorPageComponent;
  let fixture: ComponentFixture<AddInstructorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInstructorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInstructorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
