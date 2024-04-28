import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "../models/task";
import { TaskRepository } from "./backend/task/task-repository";
import { getTaskRepository } from "./backend/task/task-factory";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  private repository: TaskRepository;

  constructor(http: HttpClient) {
    this.repository = getTaskRepository(http);
  }

  getAll(): Observable<Task[]> {
    return this.repository.getAll();
  }

  getByCode(code: number): Observable<Task> {
    return this.repository.getByCode(code);
  }

  closeTask(task: Task): Observable<Task> {
    return this.repository.closeTask(task);
  }

  add(taskName: string): Observable<Task> {
    return this.repository.add(taskName);
  }

  delete(code: string): Observable<string> {
    return this.repository.delete(code);
  }
}
