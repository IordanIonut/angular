import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Person } from './person.component'

const routes = [
  {
    path: '',
    component: Person,
  },
]

@NgModule({
  declarations: [Person],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Person],
})
export class PersonModule {}
