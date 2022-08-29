import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-account',
  templateUrl: 'account.component.html',
  styleUrls: ['account.component.css'],
})
export class Account {
  rawz6hx: string = ' '
  rawoclv: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Account - Copy of Marketing Event Page')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Account - Copy of Marketing Event Page',
      },
    ])
  }
}
