import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LoginRegister } from './login-register.component'

const routes = [
  {
    path: '',
    component: LoginRegister,
  },
]

@NgModule({
  declarations: [LoginRegister],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LoginRegister],
})
export class LoginRegisterModule {}
