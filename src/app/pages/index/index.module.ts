import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Index } from './index.component'

const routes = [
  {
    path: '',
    component: Index,
  },
]

@NgModule({
  declarations: [Index],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Index],
})
export class IndexModule {}
