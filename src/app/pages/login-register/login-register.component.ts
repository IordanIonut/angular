import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'login-register',
  templateUrl: 'login-register.component.html',
  styleUrls: ['login-register.component.css'],
})
export class LoginRegister {
  rawmjvm: string = ' '
  rawxdwh: string = ' '
  rawpjf4: string = ' '
  rawn91x: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('LoginRegister - Copy of Marketing Event Page')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'LoginRegister - Copy of Marketing Event Page',
      },
    ])
  }
}
