import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pitch-player',
  templateUrl: './pitch-player.component.html',
  styleUrls: ['./pitch-player.component.scss']
})
export class PitchPlayerComponent implements OnInit {

  constructor() { }

  // @Input() playerImgUrl: string = "";
  // @Input() kitImgUrl: string = "";
  // @Input() teamName: string = "";
  // @Input() secondName: string = "";

  @Input() players: Array<any> = [];

  ngOnInit(): void {
  }

}
