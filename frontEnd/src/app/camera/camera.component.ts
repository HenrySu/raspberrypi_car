import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  constructor() { }
  public cameraServerUrl: string = `http://${environment.cameraServerUrl}`;

  ngOnInit() {
  }

}
