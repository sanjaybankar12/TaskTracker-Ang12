import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../task.model';

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[] =[];
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
      this.taskService.getTasks().subscribe((tasks:any) => this.tasks = tasks);
  }

  onDeleteTask(task:Task) {
    this.taskService.deleteTask(task).subscribe(
      () => this.tasks = this.tasks.filter((t) => t.id != task.id)
      );
  }

  onToggleRemider(task:Task) {
    this.taskService.updateTaskRemider(task).subscribe();
  }

  addTask(task:Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
