import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { AccontAssertEdit } from './accont-assert-edit.component'

const routes = [
  {
    path: '',
    component: AccontAssertEdit,
  },
]

@NgModule({
  declarations: [AccontAssertEdit],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AccontAssertEdit],
})
export class AccontAssertEditModule {}
