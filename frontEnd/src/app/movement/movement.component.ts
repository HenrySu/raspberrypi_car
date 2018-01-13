import { Component, OnInit, Input } from '@angular/core';
import { CarControllerService } from '../car-controller.service';
import { prepareProfile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.css']
})
export class MovementComponent implements OnInit {

  constructor(private carController: CarControllerService) {
    this.speed = this.predefinedSpeeds[0];
  }

  private _speed: string;
  public get speed() {
    return this._speed;
  }

  @Input()
  public set speed(speedStr: string) {
    this._speed = speedStr;
    const speedValue = this.speedStr2SpeedValueMap.get(speedStr);
    this.carController.setSpeed(speedValue);
  }

  public predefinedSpeeds():string[]{
    return [...this.speedStr2SpeedValueMap.keys()];
  }
  public readonly speedStr2SpeedValueMap = new Map<string, number>([["low", 40], ["medium", 80], ["high", 100]]);

  ngOnInit() {
  }

  forward() {
    this.carController.forward();
  }
  backward() {
    this.carController.backward();
  }
  turnLeft() {
    this.carController.turnLeft();
  }
  turnRight() {
    this.carController.turnRight();
  }
  stop() {
    this.carController.stop();
  }
}
