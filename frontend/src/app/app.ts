import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TaskForm } from './components/task-form/task-form';
import { TaskList } from './components/task-list/task-list';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    TaskForm,
    TaskList
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {

  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.obtenerTareas().subscribe(data => {
      this.tasks = data;
    });
  }

  addTask(task: any) {
    this.taskService.crearTarea(task).subscribe(() => {
      this.loadTasks();
    });
  }
}
