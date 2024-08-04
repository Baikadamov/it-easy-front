import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Lesson} from "../models/Lesson";

@Injectable({
  providedIn: 'root'
})
export class LessonService {


  private apiUrl = "http://127.0.0.1:8000/api/lessons/"

  constructor(private http: HttpClient) {
  }


  getAllLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`${this.apiUrl}`);
  }
}
