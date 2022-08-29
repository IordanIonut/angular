import { Component, Input } from '@angular/core'

@Component({
  selector: 'card-cost-center',
  templateUrl: 'card-cost-center.component.html',
  styleUrls: ['card-cost-center.component.css'],
})
export class CardCostCenter {
  @Input()
  title: string = '111111111'
  @Input()
  title1: string = '111111111'
  @Input()
  text: string = 'asdasdsadd'
  @Input()
  rootClassName: string = ''

  constructor() {}
}
