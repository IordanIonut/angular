import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { AdminLogin } from './admin-login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

const routes = [
  {
    path: '',
    component: AdminLogin,
  },
]

@NgModule({
  declarations: [AdminLogin],
  imports: [CommonModule, 
    ComponentsModule, 
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(routes)],
  exports: [AdminLogin],
})
export class AdminLoginModule {}
