import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CoursePipe } from '../course.pipe';

@Component({
  selector: 'one',
  standalone: false,
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent implements OnInit {

  mydata:any;
  todos:any;

  constructor(private courseService:CourseService) {
    //this.todos = toSignal(this.courseService.getData(), { initialValue: [] });
  }

  ngOnInit(): void {
   this.courseService.getData().subscribe(item => this.mydata = item);
   
  }

}
