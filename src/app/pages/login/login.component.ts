import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class Login {
  rawdrrf: string = ' '
  rawhxoc: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Login - Copy of Marketing Event Page')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Login - Copy of Marketing Event Page',
      },
    ])
  }
}
