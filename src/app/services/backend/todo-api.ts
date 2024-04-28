import { environment } from "src/environments/environment";

export abstract class TodoApi {
  protected readonly taskEndpoint: string = "tasks/";
  protected readonly baseUrl: string;

  constructor() {
    this.baseUrl = environment.todoApiBaseUrl;
  }
}
