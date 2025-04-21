import { Component, OnInit } from '@angular/core';
import { CourseService } from './todo/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  mydata:any;

  constructor(private courseService:CourseService) {

  }

  ngOnInit(): void {
    
  }

  getdata(id:number) {
    this.courseService.getperson(id).subscribe(item => this.mydata = item);
  }

  final(test:any) {
    console.log(test);
  }

}
