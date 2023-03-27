import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './service/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'GameOn';
  products : Product [] =[

  ]



  // filtered = this.products

  // private _filter='';
  // get filter():string{
  //   return this._filter;
  // }
  // set filter(fb:string){
  //   this._filter=fb;
  //   this.filterproducts(this._filter);
  // }

  // filterproducts(searchvalue:string){
  //   this.products
  // }

  ngOnInit(): void {

  }

}
