import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import { TrackModel } from 'src/app/core/models/tracks.model';


@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  mockTracksList1: Array<TrackModel> = []
  mockTracksList2: Array<TrackModel> = []

  listObserver$: Array<Subscription> = []

  constructor(private _trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataALL()
    this.loadDataRandom()
  }

  // loadDataALL(): void {
  //   this._trackService.getAllTracks$()
  //     .subscribe
  //     ((response: TrackModel[]) => {
  //       console.log('andANDO', response)
  //       this.mockTracksList1 = response

  //     })
  // }

  loadDataRandom(): void {
    this._trackService.getAllRandom$()
      .subscribe
      ((response: TrackModel[]) => {
        console.log('andANDO', response)
        this.mockTracksList2 = response
      })
  }

  
  async loadDataALL(): Promise<any> {
    this.mockTracksList1= await this._trackService.getAllTracks$().toPromise()
    // this.mockTracksList2= await this._trackService.getAllRandom$().toPromise()    
  }

  ngOnDestroy(): void {

  }


}
