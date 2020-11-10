import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstructorPageComponent } from './edit-instructor-page.component';

describe('EditInstructorPageComponent', () => {
  let component: EditInstructorPageComponent;
  let fixture: ComponentFixture<EditInstructorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInstructorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInstructorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
