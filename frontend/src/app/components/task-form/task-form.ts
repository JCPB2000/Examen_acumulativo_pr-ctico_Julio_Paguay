import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css']
})
export class TaskForm {

  @Output() taskCreated = new EventEmitter<any>();

  taskForm;

  constructor(private fb: FormBuilder) {

    this.taskForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaLimite: ['', Validators.required],
      prioridad: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  submit() {

    if (this.taskForm.valid) {
      this.taskCreated.emit(this.taskForm.value);
      this.taskForm.reset();
    }
  }
}
