import { Component, OnInit } from '@angular/core';
import { IClubData, IClubDetail } from '../shared/clubdata';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css', '../app.component.css']
})
export class ToolsComponent implements OnInit {

  constructor() { }

  clubData: IClubData;
  clubDetail: IClubDetail;


  ngOnInit(): void {

    this.clubData = {
      ClubName: "Sniper",
      ClubType: "Wood",
      DisplayName: "The Sniper",
      Tour: 6,
      ClubRarity: "Common"
    }

    this.clubDetail = {
      ClubName:"Sniper",
      Level:10,
      Power:172,
      Accuracy:100,
      TopSpin:68,
      BackSpin:73,
      Curl:95,
      BallGuide:4.5,
      Distance:232.2,
      DistanceTS:263.8
    }


  }

}
