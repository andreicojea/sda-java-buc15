import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Instructor } from './types/instructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorDataService {

  constructor(private httpClient: HttpClient) { }

  getOne() {

  }

  getAll(): Observable<Instructor[]> {
    return this.httpClient.get<Instructor[]>(`${environment.apiUrl}/instructors`);
  }
}
