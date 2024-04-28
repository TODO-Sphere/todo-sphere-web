import { HttpClient } from "@angular/common/http";
import { TodoApi } from "../../todo-api";
import { TaskRepository } from "../task-repository";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "src/app/models/task";

@Injectable({
  providedIn: "root",
})
export class TaskApi extends TodoApi implements TaskRepository {
  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl + this.taskEndpoint);
  }

  getByCode(code: number): Observable<Task> {
    const task = this.http.get<Task>(this.baseUrl + this.taskEndpoint + code);
    return task;
  }

  closeTask(task: Task): Observable<Task> {
    const closeEndpoint =
      this.baseUrl + this.taskEndpoint + task.code + "/close";

    let updatedTask = this.http.put<Task>(closeEndpoint, "");
    return updatedTask;
  }

  add(taskName: string): Observable<Task> {
    let task = {
      name: taskName,
    };

    const newTask = this.http.post<Task>(
      this.baseUrl + this.taskEndpoint,
      task,
    );
    return newTask;
  }

  delete(code: string): Observable<string> {
    const deletedTask = this.http.delete(
      this.baseUrl + this.taskEndpoint + code,
      {
        responseType: "text",
      },
    );
    return deletedTask;
  }
}
