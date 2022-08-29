import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { AccontCosCenterCreate } from './accont-cos-center-create.component'

const routes = [
  {
    path: '',
    component: AccontCosCenterCreate,
  },
]

@NgModule({
  declarations: [AccontCosCenterCreate],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AccontCosCenterCreate],
})
export class AccontCosCenterCreateModule {}
