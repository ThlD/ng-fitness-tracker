import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import {StoreModule} from '@ngrx/store';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material/material.module';
import {WelcomeComponent} from './welcome/welcome.component';
import {HeaderComponent} from './navigation/header/header.component';
import {SidenavListComponent} from './navigation/sidenav-list/sidenav-list.component';
import {AuthService} from './auth/auth.service';
import {TrainingService} from './training/training.service';
import {environment} from '../environments/environment';
import {UIService} from './shared/ui.service';
import {AuthModule} from './auth/auth.module';
import {AngularFirestore} from '@angular/fire/firestore';
import {AppRedusers} from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AuthModule,
    StoreModule.forRoot(AppRedusers)
  ],
  providers: [
    AuthService,
    TrainingService,
    UIService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
