import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css', '../app.component.css']
})
export class WelcomeComponent implements OnInit {

  bannerMessage: string = 'Beginners Guide to the Free Side';
  
  constructor() { }

  ngOnInit(): void {
  }

}
