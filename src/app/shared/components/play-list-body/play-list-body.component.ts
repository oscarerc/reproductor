import { Component, OnInit } from '@angular/core';
import { TrackModel } from 'src/app/core/models/tracks.model';
import * as datai from '../../../data/tracks.json';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
tracks :TrackModel[]=[]
  constructor() { }

  ngOnInit(): void {
    const {data}:any=(datai as any).default
    this.tracks= data;
  }

}
