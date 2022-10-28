import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { getTasks, TaskActionTypes, addTask, deleteTask } from './task.actions';
import { of } from 'rxjs';
import { switchMap, catchError, map, mergeMap } from 'rxjs/operators';
import { TaskService } from '../services/task.service';

@Injectable()
export class TaskEffect {

    loadTodos$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getTasks),
            switchMap(() => this.loadAllTasks())
        )
    );

    addTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addTask),
            switchMap((action) => this.taskService.add(action.name)
                .pipe(
                    mergeMap(() => this.loadAllTasks())
                ))
        )
    );

    deleteTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteTask),
            switchMap((action) => this.taskService.delete(action.id)
                .pipe(
                    mergeMap(() => this.loadAllTasks())
                ))
        )
    );

    constructor(private actions$: Actions, private taskService: TaskService) { }

    private loadAllTasks() {
        return this.taskService.getAll()
            .pipe(
                map((tasks) => ({ type: TaskActionTypes.LoadTasks, tasks })),
                catchError((error) => of({ type: TaskActionTypes.Error, message: error }))
            );
    }
}