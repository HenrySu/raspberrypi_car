import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { CarControlMessage} from './messagePayload';

@Injectable()
export class WebsocketService {

  constructor() { }
  // Our socket connection
  private socket;
  connect(): Rx.Subject<MessageEvent> {
    this.socket = io(environment.movementServerUrl);

    // We define our observable which will observe any incoming messages
    // from our socket.io server.
    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        console.log("Received message from Websocket Server")
        observer.next(data);
      })
      return () => {
        this.socket.disconnect();
      }
    });

    // We define our Observer which will listen to messages
    // from our other components and send messages back to our
    // socket server whenever the `next()` method is called.
    let myObservable = {
      next: (message: CarControlMessage) => {
        this.socket.emit(message.operation, message.direction);
      },
    };

    // we return our Rx.Subject which is a combination
    // of both an observer and observable.
    return Rx.Subject.create(myObservable, observable);
  }
}
