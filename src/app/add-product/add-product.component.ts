import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';
import { Product } from '../interfaces/product';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  name = '';
  price = 0;
  shelf_life = new Date();
  addProduct() {
    let productObject = {
      name: this.name,
      price: this.price,
      shelf_life: this.shelf_life,
    };
    this.service.addProduct(productObject);
    this.name = '';
    this.price = 0;
    this.shelf_life = new Date('dd/mm/yyyy');
  }
  constructor(private service: ProductService) {}

  ngOnInit(): void {}
}
