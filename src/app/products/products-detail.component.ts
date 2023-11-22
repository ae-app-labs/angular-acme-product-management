import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent {
  pageTitle: string = 'Product Details';
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'))
    this.pageTitle += `: ${productId}`

    this.product =     {
        "productId": 8,
        "productName": "Steel Hammer",
        "productCode": "TAX-0023",
        "releaseDate": "March 18, 2023",
        "description": "Curved claw stel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "assets/images/hammer.jpg"
    }
  }

  onBack(): void {
    this.router.navigate(['/products'])
  }
}
