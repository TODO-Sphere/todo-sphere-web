import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { createNewTask, closeTask, Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly baseUrl: string = "http://localhost:3000/";
  private readonly endpoint: string = 'tasks/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Task[]> {
    const tasks = this.http.get<Task[]>(this.baseUrl + this.endpoint);

    return tasks;
  }

  getById(id: number): Observable<Task> {
    const task = this.http.get<Task>(this.baseUrl + this.endpoint + id);
    return task;
  }

  update(task: Task): Observable<Task> {
    const updatedTask = this.http.put<Task>(this.baseUrl + this.endpoint + task.id, task);
    return updatedTask;
  }

  closeTask(task: Task): Observable<Task> {

    let updatedTask = this.http.put<Task>(this.baseUrl + this.endpoint + task.id, closeTask(task));
    return updatedTask;
  }

  add(taskName: string): Observable<Task> {
    let task = createNewTask(taskName);
    const newTask = this.http.post<Task>(this.baseUrl + this.endpoint, task);
    return newTask;
  }

  delete(id: number): Observable<Task> {
    const deletedTask = this.http.delete<Task>(this.baseUrl + this.endpoint + id);
    return deletedTask;
  }
}
