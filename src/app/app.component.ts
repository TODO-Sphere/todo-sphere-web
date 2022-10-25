import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  createTaskForm!: FormGroup;
  title = 'todo-ng';
  tasks: Task[] = [];

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.createTaskForm = this.fb.group({
      content: ['', [Validators.required]]
    });

    this.tasks.push({
      id: 1,
      name: "Primeira task",
      isClosed: true
    })
  }

  createTask(): void {
    console.log(this.createTaskForm.get('content')?.value);
  }
}
