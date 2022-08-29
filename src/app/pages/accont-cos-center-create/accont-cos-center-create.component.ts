import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'accont-cos-center-create',
  templateUrl: 'accont-cos-center-create.component.html',
  styleUrls: ['accont-cos-center-create.component.css'],
})
export class AccontCosCenterCreate {
  rawq0ga: string = ' '
  rawhxkw: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('AccontCosCenterCreate - Copy of Marketing Event Page')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'AccontCosCenterCreate - Copy of Marketing Event Page',
      },
    ])
  }
}
