import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnChanges {
  data = [
    {mark : 'Volvo', value : 10},
    {mark : 'Volvo', value : 20},
    {mark : 'Toyota', value : 1},
    {mark : 'Toyota', value : 30},
    {mark : 'Mercedes', value : 30},
    {mark : 'Mercedes', value : 40},
    {mark : 'Hyundai', value : 2},
    {mark : 'Hyundai', value : 12},
  ]
  @Input() mark: string;

  total : number = 0;

  ngOnChanges(changes:SimpleChanges){
    this.total=0;
    //usamos changes seguido del input que usamos en este caso mark y podemos usar 
    // currentValue valor actual
    // firstChange es un boolean que nos dice si es el primera vez o no que se modifica esa vairable
    // isFirstChange es una función qeu nos dice si es o no la primera vez que se modifica
    // previusValue el valor que tenía antes.
    if (changes.mark.currentValue != changes.mark.previousValue){
      //esto se ejecutaría cuando realmente el valor a cambiado
      const newMark = changes.mark.currentValue;
      const datos = this.data.filter(data=>data.mark == newMark);
      datos.forEach(dato => this.total += dato.value);
    }
  }  
}
