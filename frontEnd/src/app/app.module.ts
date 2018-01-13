import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovementComponent } from './movement/movement.component';
import { CarControllerService } from './car-controller.service';
import { WebsocketService } from './websocket.service';
import { CameraComponent } from './camera/camera.component';


@NgModule({
  declarations: [
    AppComponent,
    MovementComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CarControllerService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
