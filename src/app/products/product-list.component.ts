import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{
    pageTitle = 'Product List';
    imageWidth = 100;
    imageMargin = 2;
    showImage = false;
    filteredProducts:IProduct[] = []
    sub!: Subscription;
    errorMessage:string = ''

    constructor(private productService:ProductService){ }

    private _listFilter:string = '';
    get listFilter():string {
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        console.log('Setter ' + value);
        this.filteredProducts = this.performFilter(value)
    }

    products: IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "DN-0023",
            "releaseDate": "March 18, 2023",
            "description": "15 gallon rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.jpg"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0023",
            "releaseDate": "March 18, 2023",
            "description": "Curved claw stel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.jpg"
        },
        {
            "productId": 3,
            "productName": "Gloves ",
            "productCode": "DN-0023",
            "releaseDate": "March 18, 2023",
            "description": "15 gallon rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.jpg"
        },
        {
            "productId": 4,
            "productName": "Snow Shovel",
            "productCode": "TBX-0023",
            "releaseDate": "March 18, 2023",
            "description": "Curved claw stel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.jpg"
        },
    ];

    toggleImage():void {
        this.showImage = !this.showImage
    }

    ngOnInit(): void {
        console.log("In OnInit")
        this.sub = this.productService.getProducts().subscribe({
            next: products => {
                this.products =this.products
                this.filteredProducts = this.products
            },
            error: err => this.errorMessage = err
        })
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe()
    }

    performFilter(filterBy:string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase()
        return this.products.filter( (product) => 
            product.productName.toLocaleLowerCase().includes(filterBy));
    }

    onRatingClicked(message:string) : void {
        this.pageTitle = 'Product List: ' + message
    }
}