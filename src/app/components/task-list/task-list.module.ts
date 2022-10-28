import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TaskListComponent } from "./task-list.component";

@NgModule({
    declarations: [TaskListComponent],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    exports: [TaskListComponent],
    bootstrap: [TaskListComponent]
})
export class TaskListModule { }
