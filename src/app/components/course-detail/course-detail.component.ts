import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../services/course.service";
import {Course} from "../../models/Course";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit {

  courses?: Course[];

  constructor(private courseService: CourseService) {
  }


  ngOnInit() {
    this.getAllCourses();
  }


  getAllCourses() {
    this.courseService.getAllCourses().subscribe({
      next: (response) => {
        this.courses = response;
        console.log(this.courses); // Логируем обновлённые данные
      },
      error: (err) => {
        console.error('Error fetching courses', err);
      }
    });
  }

}
