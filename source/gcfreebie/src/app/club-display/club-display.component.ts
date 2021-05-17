import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-club-display',
  templateUrl: './club-display.component.html',
  styleUrls: ['./club-display.component.css']
})
export class ClubDisplayComponent implements OnInit {

  bgURL: string="../../assets/images/club-icon-bg-common.png";
  clubName: string="Sniper";
  constructor() { }

  ngOnInit(): void {
  }

}
