import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'two',
  standalone: false,
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent implements OnInit {

  myroute:any;
  mydata:any;

  constructor(private route:ActivatedRoute,private courseService:CourseService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(item => this.myroute = item["id"]);
    this.courseService.getperson(this.myroute).subscribe(item => this.mydata = item);
    
  }
}
