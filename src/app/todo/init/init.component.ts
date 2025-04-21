import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'init',
  standalone: false,
  templateUrl: './init.component.html',
  styleUrl: './init.component.css'
})
export class InitComponent implements OnInit {

  constructor(private viewContainerRef:ViewContainerRef) {

  }

  ngOnInit(): void {
    
  }

  onClick() {
    this.viewContainerRef.createComponent(AlertComponent);
  }

}
