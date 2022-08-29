import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'accont-assert-edit',
  templateUrl: 'accont-assert-edit.component.html',
  styleUrls: ['accont-assert-edit.component.css'],
})
export class AccontAssertEdit {
  raw721y: string = ' '
  raw1rhn: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('AccontAssertEdit - Copy of Marketing Event Page')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'AccontAssertEdit - Copy of Marketing Event Page',
      },
    ])
  }
}
