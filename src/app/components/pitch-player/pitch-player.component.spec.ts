import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchPlayerComponent } from './pitch-player.component';

describe('PitchPlayerComponent', () => {
  let component: PitchPlayerComponent;
  let fixture: ComponentFixture<PitchPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PitchPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
