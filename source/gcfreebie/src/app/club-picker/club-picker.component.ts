import { Component, OnInit } from '@angular/core';
import { clubService } from "../shared/shared.service";
import { IClubType } from "../shared/clubdata";
import { Observable,Subscription } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
//import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-club-picker',
  templateUrl: './club-picker.component.html',
  styleUrls: ['./club-picker.component.css', '../app.component.css']
})
export class ClubPickerComponent implements OnInit {


  selectedClubType: string;
  clubTypeList: IClubType[]=[];
  sub!: Subscription;
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

      }


   )
    
  }

}
