import { Component, Input } from '@angular/core'

@Component({
  selector: 'testimonial-card2',
  templateUrl: 'testimonial-card2.component.html',
  styleUrls: ['testimonial-card2.component.css'],
})
export class TestimonialCard2 {
  @Input()
  profile_alt: string = 'profile'
  @Input()
  profile_src: string = 'db6eb346-7650-4c86-81b2-7e35f23cd5fe'
  @Input()
  name: string = 'Protecting our clients’ money and information'
  @Input()
  quote: string =
    'We apply a range of security measures to ensure that our client assets and information is safe at all times.'
  @Input()
  rootClassName: string = ''

  constructor() {}
}
