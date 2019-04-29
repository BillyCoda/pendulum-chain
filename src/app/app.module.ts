import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PendulumFxComponent } from './chain/pendulum-fx/pendulum-fx.component';
import { PendObjectComponent } from './chain/pend-object/pend-object.component';

@NgModule({
  declarations: [
    AppComponent,
    PendulumFxComponent,
    PendObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
