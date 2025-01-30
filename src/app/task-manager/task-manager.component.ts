import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.css'
})
export class TaskManagerComponent {
  tasks = [
    { title: 'Task 1', description: 'Learn Angular basics', status: 'completed' },
    { title: 'Task 2', description: 'Practice ngClass directive', status: 'in-progress' },
    { title: 'Task 3', description: 'Build a practical exercise', status: 'pending' }
  ];

  filteredTasks = [...this.tasks];

  getStatusClass(status: string): any {
    return {
      completed: 'task-completed',
      'in-progress': 'task-in-progress',
      pending: 'task-pending'
    }[status];
  }

  updateStatus(task: any, status: string): void {
    task.status = status;
  }

  filterTasks(status: string): void {
    this.tasks = 
      status === 'all' ? this.filteredTasks : this.filteredTasks.filter(task => task.status === status);
  }
}
