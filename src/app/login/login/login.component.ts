import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean = true

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToRegistry(){
    this.router.navigateByUrl('/register')
  }

}
