import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import { NewsComponent } from './news/news.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { NewServerComponent } from './new-server/new-server.component';
import { FormComponent } from './form/form.component'

@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    NewsComponent,
    StudentComponent,
    NewServerComponent,
    FormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
