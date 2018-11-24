import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SendComponent } from './stepper/send.component';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HowitworksComponent } from './howitworks/howitworks.component';

const routes: Routes = [

  { path: 'help-otw', component: SendComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SendComponent,
    NavbarComponent,
    HowitworksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
