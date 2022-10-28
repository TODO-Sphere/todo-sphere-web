import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CreateTaskFormComponent } from "./create-task-form.component";

@NgModule({
    declarations: [CreateTaskFormComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    exports: [CreateTaskFormComponent],
    bootstrap: [CreateTaskFormComponent]
})
export class CreateTaskFormModule { }