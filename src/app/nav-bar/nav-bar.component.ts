import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @Input() project_data!:string
  receivedData: string = '';

  receiveData(data: string) {
    this.receivedData = data;
  }
}
