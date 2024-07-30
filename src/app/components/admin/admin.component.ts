import {Component} from '@angular/core';
import {AngularEditorConfig} from "@kolkov/angular-editor";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  showContent1 = false;
  showContent2 = false;
  showImage1 = false;
  htmlContent1 = "";
  htmlContent2 = "";

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
}
