import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'three',
  standalone: false,
  templateUrl: './three.component.html',
  styleUrl: './three.component.css'
})
export class ThreeComponent implements OnInit {
  @Input() myinput = false;
  @Output() myoutput = new EventEmitter<boolean>();

  ngOnInit(): void {
    
  }

  onClick() {
    this.myinput = !this.myinput;
    this.myoutput.emit(this.myinput);
    //console.log("clicked");
  }
}
