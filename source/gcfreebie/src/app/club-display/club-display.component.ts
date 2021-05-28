import { Component, OnInit, Input } from '@angular/core';
import { IClubData, IClubDetail } from '../shared/clubdata';

@Component({
  selector: 'app-club-display',
  templateUrl: './club-display.component.html',
  styleUrls: ['./club-display.component.css']
})
export class ClubDisplayComponent implements OnInit {

  bgURL: string="";
  imgSRC: string="";
  clubName: string="Sniper";
  @Input() clubData: IClubData;
  @Input() clubDetail: IClubDetail;

  lblAccuracy: string = "Accuracy";
  lblTopSpin: string = "Top Spin";
  lblBackSpin: string = "Back Spin";
  lblCurl: string = "Curl";
  lblBallGuide: string = "BallGuide";

  pctBallGuide: number;

  constructor() { }

  ngOnInit(): void {    

    this.bgURL=this.getbgURL(this.clubData.ClubRarity);
    this.imgSRC=this.getimgSRC(this.clubData.ClubName);
    this.pctBallGuide=this.clubDetail.BallGuide * 22.22;
  }

  getbgURL(rarity: string): string { return "../../assets/images/club-icon-bg-"+ rarity.toLowerCase() +".png"; }
  getimgSRC(clubname: string){ return "../../assets/images/clubs/"+ clubname +".png";}
  

}
