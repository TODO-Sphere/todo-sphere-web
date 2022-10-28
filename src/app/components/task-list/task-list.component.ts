import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {

    this.taskService.getAll()
      .subscribe(tasks => this.tasks = tasks);
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
