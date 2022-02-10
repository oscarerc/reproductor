import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap,catchError } from 'rxjs/operators';
import { TrackModel } from 'src/app/core/models/tracks.model';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class TrackService {
  //readonly : solo lectura
  //enviroment son archivos de manejo y conexion estandar es bueno trabajr siempre con el de prueba
  private readonly URL = environment.api;
  // // los valores que vana a ser un observable se les suele colocar al final un simbolo de dolar o peso
  // of propiedad de inicializacion aunque existen muchas otras
  constructor(private httpClient: HttpClient) {
  }

  // metodo para saltar una cancion de acuerdo al id
  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id != id)
      resolve(listTmp)
    })
  }


  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        // map((dataRaw:any)=>{
        map(({ data }: any) => {
          return data
        })
      )
  }

  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        // map((dataRaw:any)=>{
        mergeMap(({ data }: any) => this.skipById(data, 1)
          // return data.reverse()
        ),
        // hacer un console log en el filtro
        tap(data => console.log(data)),
        catchError((err)=>{
          // of()--crear observables
          console.log('algo paso revisame',err)
          return of([])
        })
      )
  }

}
