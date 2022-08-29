import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { AccontCosCenterEdit } from './accont-cos-center-edit.component'

const routes = [
  {
    path: '',
    component: AccontCosCenterEdit,
  },
]

@NgModule({
  declarations: [AccontCosCenterEdit],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AccontCosCenterEdit],
})
export class AccontCosCenterEditModule {}
