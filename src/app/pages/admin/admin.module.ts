import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Admin } from './admin.component'

const routes = [
  {
    path: '',
    component: Admin,
  },
]

@NgModule({
  declarations: [Admin],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Admin],
})
export class AdminModule {}
