import {  AfterViewInit, Component, OnInit } from '@angular/core';
import { clubService } from "../shared/shared.service";
import { IClubType, IClubData } from "../shared/clubdata";
import { Observable,Subscription } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
//import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-club-picker',
  templateUrl: './club-picker.component.html',
  styleUrls: ['./club-picker.component.css', '../app.component.css'] })
export class ClubPickerComponent implements OnInit {


  /* selectedClubType: string; */
  clubTypeList: IClubType[]=[];
  clubList: string[];
  clubData: IClubData[]=[];
  selectedClubData; IClubData;
  selectedCLubName; string;

  noTypeSelected: boolean = true;




  club: string = "";
  clubType = "";
  /* clubType: IClubType; */
  /* clubTypes: string[]=[]; */
  
  sub!: Subscription;
  csub!: Subscription;
  clsub!: Subscription;
  errorMessage: string = '';


  constructor(private clubSvc: clubService ) { }

  ngOnInit(): void {
   //this.clubTypeList=this.clubSvc.getClubTypes();
   this.sub = this.clubSvc.getClubTypes().subscribe(
      {
        next: types =>  {
          this.clubTypeList = types;          
        },
      error: err => this.errorMessage = err
      })

      this.csub = this.clubSvc.getClubData(this.club.toLowerCase()).subscribe(
        {
          next: data =>  {
            this.clubData = data;          
          },
        error: err => this.errorMessage = err
        })
      

    
  }

/*   ngAfterViewInit(): void {
    console.log('clubTypeList.length: ' + this.clubTypeList.length);
    for (let i = 0; i < this.clubTypeList.length; i++) {
      this.clubTypes[i] = this.clubTypeList[i].ClubType;
      console.log(this.clubTypes[i]);}

  } */

  /* ngAfterContentChecked(): void { */

    /* console.log('clubTypeList.length: ' + this.clubTypeList.length);
    if (this.clubTypeList.length > 0 && this.clubTypes.length == 0){
    for (let i = 0; i < this.clubTypeList.length; i++) {
      this.clubTypes[i] = this.clubTypeList[i].ClubType;
      console.log(this.clubTypes[i]);
    }} */

  /* } */

  clubTypeChanged(e): void {

    this.clubType  = e.target.value;
    console.log(this.clubType);
    this.csub = this.clubSvc.getClubList(this.clubType.toLowerCase()).subscribe(
      {
        next: clubs =>  {
          this.clubList = clubs;          
        },
      error: err => this.errorMessage = err
      })
    this.noTypeSelected=false;
  }

  clubChanged(e): void {

    console.log(e.target.value);

  }

}