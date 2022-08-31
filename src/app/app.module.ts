import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'
import { IndexModule } from './pages/index/index.module';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'Index',
    pathMatch: 'full',
  },
  {
    path: 'login-register',
    loadChildren: () =>
      import('./pages/login-register/login-register.module').then(
        (m) => m.LoginRegisterModule
      ),
  },
  {
    path: 'accontassertcreate1',
    loadChildren: () =>
      import('./pages/accont-assert-create/accont-assert-create.module').then(
        (m) => m.AccontAssertCreateModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'accontassertcreate1111',
    loadChildren: () =>
      import(
        './pages/accont-cos-center-edit/accont-cos-center-edit.module'
      ).then((m) => m.AccontCosCenterEditModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/index/index.module').then((m) => m.IndexModule),
  },
  {
    path: 'accontassertcreate11',
    loadChildren: () =>
      import('./pages/accont-assert-edit/accont-assert-edit.module').then(
        (m) => m.AccontAssertEditModule
      ),
  },
  {
    path: 'admin-login',
    loadChildren: () =>
      import('./pages/admin-login/admin-login.module').then(
        (m) => m.AdminLoginModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'accontassertcreate111',
    loadChildren: () =>
      import(
        './pages/accont-cos-center-create/accont-cos-center-create.module'
      ).then((m) => m.AccontCosCenterCreateModule),
  },
  {
    path: 'person',
    loadChildren: () =>
      import('./pages/person/person.module').then((m) => m.PersonModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./pages/account/account.module').then((m) => m.AccountModule),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    RouterModule.forRoot(routes), 
    ComponentsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
