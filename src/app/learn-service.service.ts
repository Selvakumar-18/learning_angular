import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LearnServiceService {
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getData();
  }
  getData() {
    return this.http.get('https://dummyjson.com/products');
  }

  public AddCartData = new BehaviorSubject<any>('');
  
  sendData(data: any) {
    console.log('service', data);
    this.AddCartData.next(data);
  }
}
