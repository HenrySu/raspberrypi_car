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

  private sendMessage(messageTopic: string, payload: any): void {
    this.messages.next(new CarControlMessage(messageTopic, payload));
  }

  public forward() {
    this.sendMessage('move', 'forward');
  }

  public backward() {
    this.sendMessage('move', 'backward');
  }

  public turnLeft() {
    this.sendMessage('move', 'left');
  }

  public turnRight() {
    this.sendMessage('move', 'right');
  }

  public stop() {
    this.sendMessage('move', 'stop')
  }

  public setSpeed(speed) {
    this.sendMessage('setSpeed', speed);
  }
}
