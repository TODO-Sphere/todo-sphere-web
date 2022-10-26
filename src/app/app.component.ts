import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from './models/task';
import { TaskService } from './services/task.service';
import { generateRandomInt } from './helpers/number';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  createTaskForm!: FormGroup;
  title = 'todo-ng';
  tasks: Task[] = [];

  constructor(private fb: FormBuilder, private taskService: TaskService) {

  }

  ngOnInit(): void {
    this.createTaskForm = this.fb.group({
      content: ['', [Validators.required]]
    });

    this.taskService.getAll()
      .subscribe(tasks => this.tasks = tasks);
  }

  createTask(): void {

    let newTask = {
      id: generateRandomInt(1, 10000),
      name: this.createTaskForm.get('content')?.value,
      isClosed: false
    }

    this.taskService.add(newTask).subscribe(task => {
      this.tasks.push(task);
    });
    this.createTaskForm.reset();
  }

  closeTask(id: number): void {

    this.taskService.getById(id)
      .subscribe(task => {
        task.isClosed = true
        this.taskService.update(task).subscribe(task => {
          let foundTask = this.tasks.find(i => i.id == task.id);
          if (foundTask != undefined) {
            foundTask.isClosed = true;
          }
        });
      });
  }

  deleteTask(id: number): void {
    this.taskService.delete(id).subscribe(_ => {
      this.tasks = this.tasks.filter((element) => {
        return element.id != id
      });
    });
  }
}
