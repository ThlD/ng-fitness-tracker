import {NgModule} from '@angular/core';
import {AngularFireAuthModule} from '@angular/fire/auth';

import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {SharedModule} from '../shared/shared.module';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AngularFireAuthModule,
    AuthRoutingModule
  ],
  exports: [],
  declarations: [
    SignupComponent,
    LoginComponent,
  ]
})
export class AuthModule {
}
