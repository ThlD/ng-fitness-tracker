import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.initAuthListener();
  }

  onSidenavToggle(sidenav) {
    sidenav.toggle();
  }

  closeSidenav(sidenav) {
    sidenav.close();
  }
}
