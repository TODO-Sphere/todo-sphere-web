import { createAction, props } from '@ngrx/store';
import { Task } from '../models/task';

export enum TaskActionTypes {
    GetAll = '[TASK Page] Get all tasks',
    LoadTasks = '[TASK API] Load tasks',
    Close = '[TASK Page] Close a task',
    Add = '[TASK Page] Add',
    Delete = '[TASK Page] Delete',
    Error = '[TASK API] Error',
}

export const getTasks = createAction(TaskActionTypes.GetAll);

export const loadTasks = createAction(
    TaskActionTypes.LoadTasks,
    props<{ tasks: Task[] }>()
);

export const addTask = createAction(
    TaskActionTypes.Add,
    props<{ name: string }>()
);

export const deleteTask = createAction(
    TaskActionTypes.Delete,
    props<{ id: string }>()
);

export const closeTask = createAction(
    TaskActionTypes.Close,
    props<{ task: Task }>()
);

export const errorTask = createAction(
    TaskActionTypes.Error,
    props<{ message: string }>()
);