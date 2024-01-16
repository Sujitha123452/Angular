import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
images: string[] = []; // Declare the images array property
trendyProducts:undefined|product[];
  constructor(private product:ProductService){}

  ngOnInit(): void {
      this.images[0] = "https://media.gettyimages.com/id/1073588016/photo/online-shopping-and-online-marketing-concept-shopping-cart-laptop-on-the-desk.jpg?s=612x612&w=0&k=20&c=6W0Z3XSIWKyM5usxlPniX7EHNF-NDVVF9c8oMq7I3iw=";
      this.images[1] ="https://media.gettyimages.com/id/1269628802/photo/online-video-live-streaming-concept-female-hands-holding-smartphones.jpg?s=612x612&w=0&k=20&c=F3LweZ2T_tMS7ViarTzm6GR4oGh4-hDu8C-vnclZo7c=";
    this.product.trendyProducts().subscribe((data)=>{
      this.trendyProducts=data;
    })
  }
}






