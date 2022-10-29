import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TaskListComponent } from "./task-list.component";
import { TaskStoreModule } from "src/app/store/task-store.module";

@NgModule({
    declarations: [TaskListComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        TaskStoreModule
    ],
    exports: [TaskListComponent],
    bootstrap: [TaskListComponent]
})
export class TaskListModule { }
