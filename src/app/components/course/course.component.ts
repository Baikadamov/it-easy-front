import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../services/course.service";
import {Lesson} from "../../models/Lesson";
import {ActivatedRoute} from "@angular/router";
import {Course} from "../../models/Course";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {

  lessons?: Lesson[];
  // need to fix, course is always single ->
  course?: Course[];
  courseId?: number;

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,) {
  }

  ngOnInit() {
    this.courseId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.courseId)
    this.getLessons();
    this.getCourse();
  }

  getLessons() {
    this.courseService.getLessonsByCourseId(this.courseId).subscribe({
      next: (response) => {
        this.lessons = response;
        console.log("Lessons by course : ", this.lessons)
      },
      error: err => {
        console.error("Error fetching data", err)
      }
    })
  }

  getCourse() {
    this.courseService.getCourse(this.courseId).subscribe({
      next: (response) => {
        this.course = response;
        console.log("Courses: ", this.course);
      }
    })
  }
}
