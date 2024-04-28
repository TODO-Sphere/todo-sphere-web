import { TaskRepository } from "./task-repository";
import { TaskApi } from "./api/task-api";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";
import { API_MODE, ATLAS_MODE } from "src/app/configurations/data-mode";
import { TaskLocal } from "./local/task-local";
import { RealmClient } from "../realm-client";
import { TaskAtlas } from "./atlas/task-atlas";

export function getTaskRepository(
  http: HttpClient,
  realmClient: RealmClient,
): TaskRepository {
  if (environment.dataMode == API_MODE) return new TaskApi(http);
  if (environment.dataMode == ATLAS_MODE) return new TaskAtlas(realmClient);

  return new TaskLocal();
}
