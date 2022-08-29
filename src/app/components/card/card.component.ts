import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
})
export class Card {
  @Input()
  title11: string = 'employee name'
  @Input()
  title1: string = 'data'
  @Input()
  title: string = '111111111'
  @Input()
  text: string = 'asdasdsadd'
  @Input()
  rootClassName: string = ''

  constructor() {}
}
