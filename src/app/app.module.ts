import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateTaskFormModule } from './components/create-task-form/create-task-form.module';
import { NgModule } from '@angular/core';
import { TaskListModule } from './components/task-list/task-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CreateTaskFormModule,
    TaskListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
