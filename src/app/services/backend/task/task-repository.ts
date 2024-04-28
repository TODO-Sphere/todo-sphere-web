import { Observable } from "rxjs";
import { Task } from "../../../models/task";

export interface TaskRepository {
  getAll(): Observable<Task[]>;
  getByCode(code: string): Observable<Task | undefined>;
  closeTask(task: Task): Observable<Task>;
  add(taskName: string): Observable<Task>;
  delete(code: string): Observable<string>;
}
