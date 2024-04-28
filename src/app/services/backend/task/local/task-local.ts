import { TaskRepository } from "../task-repository";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Task } from "src/app/models/task";
import { v4 as uuidv4 } from "uuid";

@Injectable({
  providedIn: "root",
})
export class TaskLocal implements TaskRepository {
  private tasks: Task[];

  constructor() {
    this.tasks = [];
    console.log("Its on Local Mode");
  }

  getAll(): Observable<Task[]> {
    return of(this.tasks);
  }

  getByCode(code: string): Observable<Task | undefined> {
    return of(this.getTaskByCode(code));
  }

  closeTask(task: Task): Observable<Task> {
    return of(this.setTaskAsClosed(task));
  }

  add(taskName: string): Observable<Task> {
    return of(this.addNewTask(taskName));
  }

  delete(code: string): Observable<string> {
    return of(this.deleteTaskByCode(code));
  }

  private getTaskByCode(code: string): Task | undefined {
    for (var i: number = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].code == code) return this.tasks[i];
    }

    return undefined;
  }

  private setTaskAsClosed(task: Task): Task {
    task.is_closed = true;

    for (var i: number = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].code == task.code) {
        this.tasks[i] = task;
        break;
      }
    }

    return task;
  }

  private addNewTask(taskName: string): Task {
    var taskCode = uuidv4();

    var newTask = {
      _id: taskCode,
      code: taskCode,
      name: taskName,
      is_closed: false,
    };

    this.tasks[this.tasks.length] = newTask;

    return newTask;
  }

  private deleteTaskByCode(code: string) {
    var newTasks: Task[] = [];
    var index = 0;

    for (var i: number = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].code == code) continue;

      newTasks[index] = this.tasks[i];
      index++;
    }

    this.tasks = newTasks;
    return "The task was successfully deleted!";
  }
}
