import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import './names.json';
import {Observable} from "rxjs";

@Injectable()
export class SampleService {
  private _url: string = "/src/app/names.json";
  constructor(private _http: Http) { }

  getNames(){
    return this._http.get(this._url)
      .map((response:Response) => response.json())
      .catch(this._errorHandler);
  }

  _errorHandler(error: Response){
    console.error(error);
    return Observable.throw(error || "Server Error");
  }

}
