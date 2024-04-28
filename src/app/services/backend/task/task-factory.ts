import { TaskRepository } from "./task-repository";
import { TaskApi } from "./api/task-api";
import { HttpClient } from "@angular/common/http";

export function getTaskRepository(http: HttpClient): TaskRepository {
  return new TaskApi(http);
}
