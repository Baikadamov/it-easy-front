import {Component, OnInit} from '@angular/core';
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {Lesson} from "../../models/Lesson";
import {LessonService} from "../../services/lesson.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  showContent1 = true;
  showContent2 = false;
  showImage1 = false;
  showImage2 = false;
  htmlContent1 = "";
  htmlContent2 = "";
  lessons?: Lesson[];

  constructor(private lessonService: LessonService) {
  }

  title = 'test';
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'yes',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      [
        'insertImage',
        'insertVideo',
        'toggleEditorMode'

      ]
    ]
  };


  ngOnInit() {
    this.getAllLessons();
  }

  getAllLessons() {
    this.lessonService.getAllLessons().subscribe({
      next: (response) => {
        this.lessons = response;
        console.log(this.lessons);
      }, error: err => {
        console.error(err);
      }
    })
  }

}
