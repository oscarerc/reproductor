import { Component, OnDestroy, OnInit } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';//programacion reactiva
import { TrackModel } from '../../../core/models/tracks.model'
@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit,OnDestroy {
  mockCover: TrackModel = {
    cover: '',
    album: '',
    name: '',
    url: '',
    _id: 1
  }

  listObserver$:Array<Subscription>=[];



  constructor(private _multimediaServices: MultimediaService) { }

  ngOnInit(): void {
    const observer1$:Subscription = this._multimediaServices.callback.subscribe(
      (response: TrackModel) => {
        console.log('recibiendo cancion ....', response)
      }
    )
    this.listObserver$=[observer1$]
  }
  //ultimo que se ejecuta antes de destruir ell componente
  ngOnDestroy(): void {
      // si termianmos el proceso afecta la memoria del equipo
      this.listObserver$.forEach(u =>u.unsubscribe())

  }

}
