import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  constructor(private router: Router) {}
  username: string | null = localStorage.getItem('username');
  logout() {
    this.router.navigateByUrl('/login');
  }
}
