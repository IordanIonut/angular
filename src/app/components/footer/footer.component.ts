import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  contact_us: string = 'CONTACT US'
  @Input()
  rootClassName: string = ''
  @Input()
  rootClassName1: string = ''
  rawm8ib: string = ' '
  rawi0i6: string = ' '

  constructor() {}
}
