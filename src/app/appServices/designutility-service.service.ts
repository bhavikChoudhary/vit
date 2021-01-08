import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityServiceService {

  constructor(private http: HttpClient) { }

  products = {}
  messageAlert(){
    alert("Thanks for Subscribe. We will get in touch with you shortly.")
  }

  url='https://jsonplaceholder.typicode.com/users';

  product(): Observable<any>{
    return this.http.get(this.url);
  }

  // userName = new Subject<any>()
  userName = new BehaviorSubject('Bhavik')

}
