import {SafeHtml, SafeValue} from "@angular/platform-browser";
export interface Lesson extends SafeValue{
  lesson_id?: number;
  title?: string;
  course?: number;
  content_1?: SafeHtml;
  content_2?: SafeHtml;
  content_3?: SafeHtml;
  content_4?: SafeHtml;
  content_5?: SafeHtml;
  content_6?: SafeHtml;
  content_7?: SafeHtml;
  content_8?: SafeHtml;
  content_9?: SafeHtml;
  content_10?: SafeHtml;
  img_1?: string;
  img_2?: string;
  img_3?: string;
  img_4?: string;
  img_5?: string;
  img_6?: string;
  img_7?: string;
  img_8?: string;
  img_9?: string;
  img_10?: string;
  video_url: string;
  position: string;
}
