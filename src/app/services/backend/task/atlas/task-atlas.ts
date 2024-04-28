import { TaskRepository } from "../task-repository";
import { Injectable } from "@angular/core";
import { from, NEVER, Observable, of } from "rxjs";
import { Task } from "src/app/models/task";
import { RealmClient } from "../../realm-client";
import { v4 as uuidv4 } from "uuid";

@Injectable({
  providedIn: "root",
})
export class TaskAtlas implements TaskRepository {
  collection = this.getCollection();

  constructor(private realmClient: RealmClient) {
    console.log("Its on Atlas Mode");
  }

  getAll(): Observable<Task[]> {
    if (!this.collection) {
      console.error("Failed to load collection.");
      return NEVER;
    }

    var result = this.collection.aggregate([]) as Promise<Task[]>;

    return from(result);
  }

  getByCode(code: string): Observable<Task | undefined> {
    if (!this.collection) {
      console.error("Failed to load collection.");
      return NEVER;
    }

    var result = this.collection.aggregate([
      {
        $match: {
          code: code,
        },
      },
      {
        $limit: 1,
      },
    ]) as Promise<Task>;

    return from(result);
  }

  closeTask(task: Task): Observable<Task> {
    task.is_closed = true;

    if (this.collection) {
      this.collection.updateOne(
        { code: task.code },
        { $set: { is_closed: task.is_closed } },
      );
    }

    return of(task);
  }

  add(taskName: string): Observable<Task> {
    var taskCode = uuidv4();

    var newTask = {
      _id: taskCode,
      code: taskCode,
      name: taskName,
      is_closed: false,
    };

    if (this.collection) {
      this.collection.insertOne(newTask);
    }

    return of(newTask);
  }

  delete(code: string): Observable<string> {
    if (this.collection) {
      this.collection.deleteOne({ code: code });
    }

    return of("Task deleted successfully!");
  }

  private getCollection() {
    const app = this.realmClient.getAppInstance();
    const mongo = app.currentUser?.mongoClient("mongodb-atlas");
    const collection = mongo?.db("TodoDb").collection<Task>("Tasks");
    return collection;
  }
}
