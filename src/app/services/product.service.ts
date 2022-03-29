import { Product } from './../interfaces/product';
import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];
  constructor() {}
  addProduct(product: Product) {
    product.id = this.generateUUID();
    return this.products.push(product);
  }
  getAllProducts() {
    return this.products;
  }

  editProduct(updatedProduct: Product) {
    this.products.find((oldProduct) => {
      if (oldProduct.id == updatedProduct.id) {
        oldProduct.name = updatedProduct.name;
        oldProduct.price = updatedProduct.price;
        oldProduct.shelf_life = updatedProduct.shelf_life;
      }
    });
  }

  deleteProduct(productId: string) {
    let index = this.products.findIndex((product) => product.id == productId);
    let deletedProduct = this.products.splice(index, 1);
    return deletedProduct;
  }

  generateUUID(): string {
    let randomUUID = uuidv4();
    return randomUUID;
  }
}
