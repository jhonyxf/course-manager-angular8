import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

    course: Course;

    constructor(private courseService: CourseService, private activatedRoute: ActivatedRoute){}

    ngOnInit(): void{
        this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: course => this.course = course,
            error: err => console.log('Erro ', err)
        })
    }

    save(): void{
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Salvo ', this.course),
            error: err => console.log('Erro ',err)
        });
    }
}