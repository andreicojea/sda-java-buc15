import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from './types/course';

// const multiline = `asdfasdf
// asdfasdf"''''""
// asdfasdfasdf
// asdfasdfasdf`;

// const cuPlus = 'asdfas"df\'as' +
//   'adfasdfasdf' +
//   'asdfasdfasdf' +
//   'asdfasdf';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  constructor(private httpClient: HttpClient) { }

  getOne(id: number): Observable<Course> {
    // return this.httpClient.get<Course>('http://localhost:3000/courses/' + id);
    return this.httpClient.get<Course>(`${environment.apiUrl}/courses/${id}`);
  }

  getAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${environment.apiUrl}/courses`);
  }

  create() {

  }

  update() {

  }

  delete() {

  }
}
