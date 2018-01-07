import { Component, OnInit } from '@angular/core';
import { CarControllerService } from '../car-controller.service';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.css']
})
export class MovementComponent implements OnInit {

  constructor(private carController: CarControllerService) { }

  ngOnInit() {
  }

  forward(){
    this.carController.forward();
  }
}
