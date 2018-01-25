import { Component, OnInit} from '@angular/core';
import { environment } from '../../environments/environment';
import { CarControllerService } from '../car-controller.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  public cameraServerUrl: string = `http://${environment.cameraServerUrl}`;

  constructor(private carController:CarControllerService) { }

  ngOnInit() {
  }
  cameraUp(){
    this.carController.cameraUp();
  }
  cameraDown(){
    this.carController.cameraDown();
  }
  cameraLeft(){
    this.carController.cameraLeft();
  }
  cameraRight(){
    this.carController.cameraRight();
  }
}
