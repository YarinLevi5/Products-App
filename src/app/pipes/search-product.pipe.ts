import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';
@Pipe({
  name: 'searchProduct',
})
export class SearchProductPipe implements PipeTransform {
  transform(products: Product[], productName: string): Product[] {
    if (!productName) return products;
    return products.filter((product) =>
      product.name.toLocaleLowerCase().includes(productName)
    );
  }
}
