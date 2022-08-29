import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
})
export class Contact {
  rawgc7u: string = ' '
  rawrh2f: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Contact - Copy of Marketing Event Page')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Contact - Copy of Marketing Event Page',
      },
    ])
  }
}
