import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubDisplayRowComponent } from './club-display-row.component';

describe('ClubDisplayRowComponent', () => {
  let component: ClubDisplayRowComponent;
  let fixture: ComponentFixture<ClubDisplayRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubDisplayRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubDisplayRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
