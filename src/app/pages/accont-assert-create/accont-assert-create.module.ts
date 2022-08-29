import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { AccontAssertCreate } from './accont-assert-create.component'

const routes = [
  {
    path: '',
    component: AccontAssertCreate,
  },
]

@NgModule({
  declarations: [AccontAssertCreate],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AccontAssertCreate],
})
export class AccontAssertCreateModule {}
