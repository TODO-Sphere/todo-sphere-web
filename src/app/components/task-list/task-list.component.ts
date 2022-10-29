import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { select, Store } from '@ngrx/store';
import { deleteTask, getTasks } from 'src/app/store/task.actions';
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

  ngOnInit(): void {
  }

  closeTask(id: number): void {

    /** 
    this.taskService.getById(id)
      .subscribe(task => {
        task.isClosed = true
        this.taskService.update(task).subscribe(task => {
          let foundTask = this.tasks.find(i => i.id == task.id);
          if (foundTask != undefined) {
            foundTask.isClosed = true;
          }
        });
      }); **/
  }

  deleteTask(id: number): void {
    this.store.dispatch(deleteTask({ id }));
  }

}
