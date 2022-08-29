import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Account } from './account.component'

const routes = [
  {
    path: '',
    component: Account,
  },
]

@NgModule({
  declarations: [Account],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Account],
})
export class AccountModule {}
