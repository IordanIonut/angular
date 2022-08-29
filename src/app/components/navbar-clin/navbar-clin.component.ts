import { Component, Input } from '@angular/core'

@Component({
  selector: 'navbar-clin',
  templateUrl: 'navbar-clin.component.html',
  styleUrls: ['navbar-clin.component.css'],
})
export class NavbarClin {
  @Input()
  image_src: string = '50e9d27a-91a3-4430-b197-7d00c133c858'
  @Input()
  rootClassName: string = ''
  @Input()
  image_alt: string = 'logo'

  constructor() {}
}
