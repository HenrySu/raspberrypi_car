import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MovementComponent } from './movement/movement.component';
import { CarControllerService } from './car-controller.service';
import { WebsocketService } from './websocket.service';


@NgModule({
  declarations: [
    AppComponent,
    MovementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CarControllerService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
