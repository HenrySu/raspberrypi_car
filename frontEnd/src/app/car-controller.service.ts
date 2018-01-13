import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Subject } from 'rxjs';
import { CarControlMessage } from './messagePayload';
@Injectable()
export class CarControllerService {
  private messages: Subject<any>;

  constructor(private websocketService: WebsocketService) {
    this.messages = <Subject<any>>websocketService
      .connect()
      .map((response: any): any => {
        return response;
      })
  }

  public forward() {
    this.messages.next(new CarControlMessage('move', 'forward'));
  }

  public backward() {
    this.messages.next(new CarControlMessage('move', 'backward'));
  }

  public turnLeft() {
    this.messages.next(new CarControlMessage('move', 'left'));
  }

  public turnRight() {
    this.messages.next(new CarControlMessage('move', 'right'));
  }

  public stop(){
    this.messages.next(new CarControlMessage('move', 'stop'))
  }
  
  public setSpeed(speed){
    this.messages.next(new CarControlMessage('setSpeed', speed));
  }
}
