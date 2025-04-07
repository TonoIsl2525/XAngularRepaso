import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent  {

  courses = [
    {id: 1, name: 'course 1', author: 'Lui1', type: 'free'},
    {id: 2, name: 'course 2', author: 'Lui2', type: 'premium'},
    {id: 3, name: 'course 3', author: 'Lui3', type: 'free'}
  ];

}
