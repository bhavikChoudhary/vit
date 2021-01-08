import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageproductService {

  url = 'https://practice-angular-40c17-default-rtdb.firebaseio.com/products.json';

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  saveProducts(products:any[]){
    // return this.http.post(this.url, products)
    return this.http.put(this.url,products, {headers: this.headers})
  }

  fetchProducts(){
    return this.http.get(this.url)
  }

  getDataTitle(){
    return this.http.get('https://practice-angular-40c17-default-rtdb.firebaseio.com/dataTitle.json')
  }
}
