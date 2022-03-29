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
  editMode = false;

  constructor(private service: ProductService) {}
  deleteProduct() {
    this.service.deleteProduct(this.product?.id || '');
  }

  editProduct(name: string, price: string, shelf_life: string) {
    this.editAndSaveBtn = true;
    this.editMode = !this.editMode;

    let updatedProduct: Product = {
      id: this.product?.id,
      name,
      price: parseInt(price),
      shelf_life: new Date(shelf_life),
    };
    this.service.editProduct(updatedProduct);
  }

  ngOnInit(): void {}
}
