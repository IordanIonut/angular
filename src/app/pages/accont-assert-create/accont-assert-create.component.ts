import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'accont-assert-create',
  templateUrl: 'accont-assert-create.component.html',
  styleUrls: ['accont-assert-create.component.css'],
})
export class AccontAssertCreate {
  raw0kxp: string = ' '
  rawsgmw: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('AccontAssertCreate - Copy of Marketing Event Page')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'AccontAssertCreate - Copy of Marketing Event Page',
      },
    ])
  }
}
