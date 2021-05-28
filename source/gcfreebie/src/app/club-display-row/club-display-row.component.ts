import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-club-display-row',
  templateUrl: './club-display-row.component.html',
  styleUrls: ['./club-display-row.component.css', '../app.component.css','../club-display/club-display.component.css']
})
export class ClubDisplayRowComponent implements OnInit {

  constructor() { }


  @Input() label: string;
  @Input() value: number;
  @Input() numDisplay: string;

  stylePctValue: string = "width: 0px"



  ngOnInit(): void {
    this.stylePctValue = "width: " + this.value.toString() + "px"
  }

}
