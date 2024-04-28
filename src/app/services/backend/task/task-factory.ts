import { TaskRepository } from "./task-repository";
import { TaskApi } from "./api/task-api";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";
import { API_MODE } from "src/app/configurations/data-mode";
import { TaskLocal } from "./local/task-local";

export function getTaskRepository(http: HttpClient): TaskRepository {
  if (environment.dataMode == API_MODE) new TaskApi(http);

  return new TaskLocal();
}
