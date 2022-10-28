import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CreateTaskFormComponent } from "./create-task-form.component";
import { TaskStoreModule } from "../../store/task-store.module";

@NgModule({
    declarations: [CreateTaskFormComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        TaskStoreModule
    ],
    exports: [CreateTaskFormComponent],
    bootstrap: [CreateTaskFormComponent]
})
export class CreateTaskFormModule { }