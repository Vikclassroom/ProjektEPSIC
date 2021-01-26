import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {IProduct} from './Models/products';
import {IPagintation} from './Models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Shop';
  products: IProduct[];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('http://localhost:51140/api/Products?pageSize=50').subscribe(
      (response: IPagintation) => {
      this.products = response.data;
    }, error => {
      console.log(error);
    });
  }
}
