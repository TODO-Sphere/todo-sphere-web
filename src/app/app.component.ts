import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  lastIndex: number = 0;
  createTaskForm!: FormGroup;
  title = 'todo-ng';
  tasks: Task[] = [];

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.createTaskForm = this.fb.group({
      content: ['', [Validators.required]]
    });
  }

  createTask(): void {

    this.lastIndex++;

    let newTask = {
      id: this.lastIndex,
      name: this.createTaskForm.get('content')?.value,
      isClosed: false
    }

    this.tasks.push(newTask);
    this.createTaskForm.reset();
  }

  closeTask(id: number): void {
    let task = this.tasks.find(i => i.id == id);
    if (task != undefined) {
      task.isClosed = true;
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((element) => {
      return element.id != id
    });
  }
}
