import { Component, Input, OnInit } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { TrackModel } from 'src/app/core/models/tracks.model';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
@Input() mode:'small' | 'big' ='small';
@Input() track!:TrackModel;

  constructor(private _multimediaServices:MultimediaService) { }

  ngOnInit(): void {
  }

  sendPlay(track:TrackModel):void{
    console.log('enviando cancion al reproductor',track)
    this._multimediaServices.callback.emit(track)
  }

}
