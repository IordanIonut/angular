import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { TestimonialCard4 } from './testimonial-card4/testimonial-card4.component'
import { Copyright } from './copyright/copyright.component'
import { Footer } from './footer/footer.component'
import { CardCostCenter } from './card-cost-center/card-cost-center.component'
import { Navbar } from './navbar/navbar.component'
import { CardAssert } from './card-assert/card-assert.component'
import { SpeakerCard } from './speaker-card/speaker-card.component'
import { FooterClin } from './footer-clin/footer-clin.component'
import { NavbarClin } from './navbar-clin/navbar-clin.component'
import { Card } from './card/card.component'
import { NavigationLinks1 } from './navigation-links1/navigation-links1.component'
import { TestimonialCard2 } from './testimonial-card2/testimonial-card2.component'

@NgModule({
  declarations: [
    TestimonialCard4,
    Copyright,
    Footer,
    CardCostCenter,
    Navbar,
    CardAssert,
    SpeakerCard,
    FooterClin,
    NavbarClin,
    Card,
    NavigationLinks1,
    TestimonialCard2,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    TestimonialCard4,
    Copyright,
    Footer,
    CardCostCenter,
    Navbar,
    CardAssert,
    SpeakerCard,
    FooterClin,
    NavbarClin,
    Card,
    NavigationLinks1,
    TestimonialCard2,
  ],
})
export class ComponentsModule {}
