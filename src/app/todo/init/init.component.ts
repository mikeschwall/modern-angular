import { Component, ViewContainerRef } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'init',
  standalone: false,
  templateUrl: './init.component.html',
  styleUrl: './init.component.css'
})
export class InitComponent {
    constructor(private viewContainer:ViewContainerRef) {

    }

    onClick() {
      this.viewContainer.createComponent(AlertComponent);
    }

}
