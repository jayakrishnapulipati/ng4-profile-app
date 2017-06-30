import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Injectable} from "@angular/core";

@Injectable()
export class ProfileService {

  private NAMESURL = 'assets/json/names.json';

  constructor(private http: Http) {}

  getNames() {
    return this.http.get(this.NAMESURL)
      .map((res: Response) => res.json())
      .catch(error => error.json().error);
  }

  getAddress() {

  }

  getContacts() {

  }

  getEmergencyContacts() {

  }
}
