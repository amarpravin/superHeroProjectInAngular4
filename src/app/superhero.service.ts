import { Injectable } from '@angular/core';
import { Superhero } from './superhero';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SuperHeroService {

  private apiUrl = "http://localhost:8081";
  data: any = null;

  constructor(private _http: Http) { }

  getSuperheroes() {
    return this._http.get(this.apiUrl).map(res => res.json()).toPromise();
  }

}