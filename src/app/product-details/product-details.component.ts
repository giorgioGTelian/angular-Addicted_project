import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  showEditForm = false;


  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
    ) { }

    //if we want to implement carts:
    addToCart(product: Product) {
      this.cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    }


  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }
  deleteProduct(product: Product): void {
    // Remove the product from the products array
    const index = products.indexOf(product);
    if (index !== -1) {
      products.splice(index, 1);
      window.alert('Product has been deleted!');
      this.router.navigateByUrl('/');
    }
  }

  modifyProduct() {
    this.showEditForm = true;
  }

  saveProduct() {
    this.showEditForm = false;
    window.alert('Product has been modified!');
  }

  cancelEdit() {
    this.showEditForm = false;
  }


  

}