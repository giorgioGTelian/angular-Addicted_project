import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { products, Product } from '../products';
import { Router } from '@angular/router';

import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  items: Product[] = [];
  /* . . . */
  
    addToCart(product: Product) {
      this.items.push(product);
    }
  
    getItems() {
      return this.items;
    }
  
  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      price: '',
      description: ''
    });
  }

  onSubmit(): void {
    // Create a new product object with the form values
    const newProduct: Product = {
      id: products.length + 1,
      name: this.checkoutForm.value.name,
      price: this.checkoutForm.value.price,
      description: this.checkoutForm.value.description
    };

    // Add the new product to the products array
    products.push(newProduct);

    // Clear the form
    this.checkoutForm.reset();
  }

  goBack(): void {
    this.router.navigate(['/']); 
  }
}



