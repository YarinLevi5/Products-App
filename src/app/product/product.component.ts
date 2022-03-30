import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product?: Product;
  editAndSaveBtn = false;
  edit = false;
  clear = false;
  name = '';
  price = 0;
  shelf_life = new Date();

  constructor(private service: ProductService) {}
  deleteProduct() {
    this.service.deleteProduct(this.product?.id || '');
  }

  editProduct() {
    this.edit = !this.edit;
    this.editAndSaveBtn = true;
    let updatedProduct: Product = {
      id: this.product?.id,
      name: this.name,
      price: this.price,
      shelf_life: this.shelf_life,
    };
    this.service.editProduct(updatedProduct);
    this.clear = true;
  }

  ngOnInit(): void {}
}
