import { Injectable } from '@angular/core';
import { RestService } from '../services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private rest: RestService) { }
}
