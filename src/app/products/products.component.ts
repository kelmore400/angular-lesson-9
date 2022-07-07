import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  products: any[] = products;
  categories: any[]=[];
  currentCategory: string|null = null;

  getCategories() {
    for(let product of this.products) {
      if (!this.categories.includes(product.category)) {
        this.categories.push(product.category)
      }
    }
  }

  filter(category: string) {
    this.products = products.filter((item)=>item.category === category);
    this.router.navigate(['products', category]);
  }


  
  ngOnInit(): void {
    this.getCategories();
    let category: string | null = null;
    this.activatedRoute.params.forEach(param => category = param['category']);
    
    if(category) {
      this.currentCategory = category;
      this.products = products.filter((item)=>item.category === category);
    }
  }

}
