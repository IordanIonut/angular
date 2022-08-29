import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css'],
})
export class Admin {
  raw71q3: string = ' '
  rawqzzu: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Admin - Copy of Marketing Event Page')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Admin - Copy of Marketing Event Page',
      },
    ])
  }
}
