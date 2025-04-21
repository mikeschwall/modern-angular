import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'one',
  standalone: false,
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent implements OnInit {

  mydata:any;
  @Output() myoutput = new EventEmitter<any>();

  constructor(private courseService:CourseService) {

  }

  ngOnInit(): void {
    this.courseService.getdata().subscribe(item => this.mydata = item);
    
  }

  onClick(id:number) {
    this.myoutput.emit(id);
  }

}
