import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTask } from 'src/app/store/task.actions';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.css']
})
export class CreateTaskFormComponent implements OnInit {

  createTaskForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.createTaskForm = this.fb.group({
      content: ['', [Validators.required]]
    });
  }

  onSubmit() {

    this.store.dispatch(addTask({ name: this.createTaskForm.get('content')?.value }));
    this.createTaskForm.reset();
  }
}
