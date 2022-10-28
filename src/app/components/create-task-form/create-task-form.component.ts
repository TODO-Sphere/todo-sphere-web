import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createNewTask } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.css']
})
export class CreateTaskFormComponent implements OnInit {

  createTaskForm!: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) { }

  ngOnInit(): void {
    this.createTaskForm = this.fb.group({
      content: ['', [Validators.required]]
    });
  }

  createTask(): void {

    this.taskService.add(this.createTaskForm.get('content')?.value).subscribe();
    this.createTaskForm.reset();
  }
}
