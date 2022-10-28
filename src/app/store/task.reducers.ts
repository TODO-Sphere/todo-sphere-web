import { createReducer, on, createSelector } from '@ngrx/store';
import { errorTask, loadTasks } from './task.actions';
import { Task } from '../models/task';

export interface TaskState {
    tasks: Task[];
    error: string;
}

export const initialState: TaskState = {
    tasks: [],
    error: '',
};

export const TaskReducer = createReducer(
    initialState,
    on(loadTasks, (state, action) => ({ ...state, tasks: action.tasks })),
    on(errorTask, (state, action) => ({
        ...state,
        error: action.message,
    }))
);

export const selectTaskState = (state: any) => state.taskState;
export const selectTasks = createSelector(selectTaskState, (state) => state.tasks);

export const selectError = createSelector(selectTaskState, (state) => state.error);

export const selectTasksCount = createSelector(selectTaskState, (state) => state.tasks.length);