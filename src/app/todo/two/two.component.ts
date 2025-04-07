import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../course.service';

@Component({
  selector: 'two',
  standalone: false,
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent implements OnInit {

  mygroup!:FormGroup;
  foodArray:any[] = [];
  @Input() foodAdded = false;

  constructor(private courseService:CourseService) {}

  ngOnInit(): void {
    this.mygroup = new FormGroup({
      food: new FormControl(null)
    })
  }

  handleSubmit = () => {
    this.courseService.getFire().subscribe((object:Record<any,any>) => {
      for(let key in object) {
        this.foodArray.push(object[key]);
        this.foodAdded = true;
      } 
    })
  }

  onClick() {
    this.courseService.sendData(this.mygroup.value.food).subscribe(() => console.log('sent'));
    setTimeout(() => {
      this.foodArray = [];
      this.handleSubmit();
    }, 500);
  }

}
