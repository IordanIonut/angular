import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'accont-cos-center-edit',
  templateUrl: 'accont-cos-center-edit.component.html',
  styleUrls: ['accont-cos-center-edit.component.css'],
})
export class AccontCosCenterEdit {
  raw4uu3: string = ' '
  raw9j0x: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('AccontCosCenterEdit - Copy of Marketing Event Page')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'AccontCosCenterEdit - Copy of Marketing Event Page',
      },
    ])
  }
}
