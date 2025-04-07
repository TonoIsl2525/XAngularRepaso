import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title1: string = 'eShopping';
  slogan = 'shop';
  display: boolean = false;
  searchValue: string = 'algo nuevo';
  notifyme: string = "avisame";

}
