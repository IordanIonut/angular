import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css'],
})
export class Person {
  raw3d3u: string = ' '
  rawpcpi: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Person - Copy of Marketing Event Page')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Person - Copy of Marketing Event Page',
      },
    ])
  }
}
