import { Component, Input } from '@angular/core'

@Component({
  selector: 'card-assert',
  templateUrl: 'card-assert.component.html',
  styleUrls: ['card-assert.component.css'],
})
export class CardAssert {
  @Input()
  title: string = '111111111'
  @Input()
  image_alt: string = 'image'
  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=200'
  @Input()
  rootClassName: string = ''
  @Input()
  text: string = 'asdasdsadd'

  constructor() {}
}
