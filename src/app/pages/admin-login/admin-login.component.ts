import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'admin-login',
  templateUrl: 'admin-login.component.html',
  styleUrls: ['admin-login.component.css'],
})
export class AdminLogin {
  rawuszn: string = ' '
  raw6l4s: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('AdminLogin - Copy of Marketing Event Page')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'AdminLogin - Copy of Marketing Event Page',
      },
    ])
  }
}
