import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Contact } from './contact.component'

const routes = [
  {
    path: '',
    component: Contact,
  },
]

@NgModule({
  declarations: [Contact],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Contact],
})
export class ContactModule {}
