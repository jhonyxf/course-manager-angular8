import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { CourseService } from './courses/course.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
