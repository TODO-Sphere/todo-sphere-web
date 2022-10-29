import { generateRandomInt } from '../helpers/number';

export interface Task {
    id: number;
    name: string;
    isClosed: boolean;
}

export function createNewTask(content: string): Task {
    return {
        id: generateRandomInt(1, 10000),
        name: content,
        isClosed: false
    }
}

export function closeTask(task: Task): Task {
    return {
        id: task.id,
        name: task.name,
        isClosed: true
    }
}