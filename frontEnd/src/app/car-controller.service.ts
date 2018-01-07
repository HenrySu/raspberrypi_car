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
    this.messages.next(
      new CarControlMessage('move', 'forward'));
  }

  public backward() {

  }

  public turnLeft() {

  }

  public turnRight() {

  }
}