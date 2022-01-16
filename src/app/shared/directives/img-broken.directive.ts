import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  // se le asigana donde queremos que funcione
  selector: 'img[appImgBroken]'
  // host
})
export class ImgBrokenDirective {
  // este input se puede utilizar en el html correspondiente enviando la url y manejando mas dinamismo
  @Input() customImg: string=''

  @HostListener('error')  handleError():void{
    const elNative= this.elHost.nativeElement
    console.log('imagen reventada');
    elNative.src='../../../assets/perfil.jpg'
    // manejando el input se haria de la siguiente manera
    // elNative.src= this.customImg;
  }
// ElementRef :es para hacer referencia a un elemento
  constructor(private elHost:ElementRef) { }

}
