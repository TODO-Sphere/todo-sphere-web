import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-ng';
  tasks: Task[] = [];

  ngOnInit(): void {
    this.tasks.push({
      id: 1,
      name: "Primeira task",
      isClosed: false
    })
  }
}
