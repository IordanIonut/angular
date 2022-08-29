import { Component, Input } from '@angular/core'

@Component({
  selector: 'footer-clin',
  templateUrl: 'footer-clin.component.html',
  styleUrls: ['footer-clin.component.css'],
})
export class FooterClin {
  @Input()
  image_alt: string = 'image'
  @Input()
  image_src: string =
    '/playground_assets/black_yellow_modern_company_logo-removebg-preview-200h.png'
  @Input()
  contact_us: string = 'CONTACT US'
  @Input()
  rootClassName: string = ''
  raw8nrl: string = ' '
  raw89tv: string = ' '

  constructor() {}
}
