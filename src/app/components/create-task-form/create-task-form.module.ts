import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CreateTaskFormComponent } from "./create-task-form.component";

@NgModule({
    declarations: [CreateTaskFormComponent],
    imports: [
        HttpClientModule,
        ReactiveFormsModule
    ],
    exports: [CreateTaskFormComponent],
    bootstrap: [CreateTaskFormComponent]
})
export class CreateTaskFormModule { }