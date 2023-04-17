import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { select, Store } from '@ngrx/store';
import { closeTask, deleteTask, getTasks } from 'src/app/store/task.actions';
import { Observable, of } from 'rxjs';
import { selectTasks } from 'src/app/store/task.reducers';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks$: Observable<Task[]> = of();

  constructor(private store: Store) {
    this.store.dispatch(getTasks());
    this.tasks$ = this.store.pipe(select(selectTasks));
  }

  ngOnInit (): void {
  }

  closeTask (task: Task): void {
    this.store.dispatch(closeTask({ task }));
  }

  deleteTask (id: string): void {
    this.store.dispatch(deleteTask({ id }));
  }

}
