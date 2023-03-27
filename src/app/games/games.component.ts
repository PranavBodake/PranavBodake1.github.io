import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Product } from '../product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  products : Product [] =[]

  constructor(private pro_ser : ProductService){}

  ngOnInit(): void {
    this.pro_ser.getProducts().subscribe(products => {
      this.products = products;
      this.filtered = products;
    })
  }

  addwishlist(event:any){
     alert('Successfully added to Wishlist');
  }

  adddownload(event:any){
    alert('Trial Version Downloading Started...');
  }

  imgstyle={
    'width.px':'300',
    'height.px':'400'
  }

  filtered = this.products

  private _filter='';
    get filter():string{
      return this._filter;
    }
    set filter(fb:string){
      this._filter=fb;
      this.filterproducts(this._filter)
    }

    filterproducts(searchvalue:string){
      this.filtered=this.products.filter(product =>{
        return product.name.toLowerCase().includes(searchvalue);
      }
      )
    }

}
