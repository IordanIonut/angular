import { Component, Output, EventEmitter, Input } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class Navbar {
  @Input()
  text: string = 'Home'
  @Output()
  hide: EventEmitter<any> = new EventEmitter()
  @Input()
  image_src1: string =
    'https://presentation-website-assets.teleporthq.io/logos/logo.png'
  @Input()
  rootClassName: string = ''
  @Input()
  text2: string = 'about'
  @Input()
  text5: string = 'Register/login'
  @Input()
  text3: string = 'location'
  @Input()
  text1: string = 'Sponsore'
  @Input()
  image_alt1: string = 'image'
  @Input()
  image_src: string =
    '/playground_assets/black_yellow_modern_company_logo-removebg-preview-300w.png'
  @Input()
  text4: string = 'personal'
  @Input()
  image_alt: string = 'logo'

  constructor() {}
}
