import { Component, OnInit } from '@angular/core';
import { TrackModel } from 'src/app/core/models/tracks.model';
import * as datai  from  '../../../../data/tracks.json';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  mockTracksList:Array<TrackModel>=[
  ]

  constructor() { }

  ngOnInit(): void {
    const {data} :any=(datai as any).default
     this.mockTracksList=data;
  }

}
