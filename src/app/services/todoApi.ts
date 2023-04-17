import { environment as devEnviroment } from "src/environments/environment";
import { environment as prodEnviroment } from "src/environments/environment.prod";
import { isDevMode } from '@angular/core';

export abstract class TodoApi {

    protected readonly taskEndpoint: string = 'tasks/';
    protected readonly baseUrl: string;

    constructor() {
        this.baseUrl = isDevMode() ?
            devEnviroment.todoApiBaseUrl :
            prodEnviroment.todoApiBaseUrl;
    }
}