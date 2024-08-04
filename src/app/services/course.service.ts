import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../models/Course";
import {Lesson} from "../models/Lesson";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = "http://127.0.0.1:8000/api/course";

  constructor(private http: HttpClient) {
  }

  getLessonsByCourseId(id: number | undefined): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`${this.apiUrl}/${id}/lessons/`);
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}`);

  }

  getCourse(id: number | undefined): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/${id}`);
  }


}
