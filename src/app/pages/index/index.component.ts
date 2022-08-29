import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-index',
  templateUrl: 'index.component.html',
  styleUrls: ['index.component.css'],
})
export class Index {
  rawk2rz: string = ' '
  rawv3d3: string = ' '
  rawuhsj: string = ' '
  rawa4un: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('IOR SMART MANAGER')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'IOR SMART MANAGER',
      },
    ])
  }
}
