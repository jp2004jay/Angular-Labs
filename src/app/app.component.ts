import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NgFor, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'array-crud';
  sidebarItems = [
    { path: '/', itemName: 'Resume Without Two Way' },
    { path: '/with-two-way', itemName: 'Resume With Two Way' },
    { path: '/array-crud', itemName: 'Array Crud' },
    { path: '/array-of-object-crud', itemName: 'Array of Object CRUD'},
    { path: '/directives', itemName: 'Directives'},
    { path: '/task-manager', itemName: 'Task Manager Using ngClass'},
    { path: '/validation-form', itemName: 'Validation'},
    { path: '/reactive-forms', itemName: 'Reactive Form'},
    { path: '/form-builder', itemName: 'Form Builder'}
  ]

}
