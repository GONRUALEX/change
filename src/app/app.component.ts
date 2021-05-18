import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  markSelected : string = "Volvo";
  marks: string[] = ["Volvo", "Toyota", "Mercedes","Hyundai"];

}
