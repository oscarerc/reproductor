import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from 'src/app/core/models/tracks.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit {
// DECORADOR PPARA EL TITULO Y QUE SEA DINAMICO EN AMBOS COMPONENTES
@Input() title:string=''
// VARIABLE A LA CUAL SE LE PERMITE SOLO DOS VALORES Y SE LE ASIGNA UNO DE INICIO
@Input() mode:'small' |'big'='big'

 //INPUT DE CANCION DE M,ODULO GENERICO
 @Input() dataTracks: Array<TrackModel>=[

 ]
 constructor() { }

  ngOnInit(): void {
  }

}
