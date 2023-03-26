import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-carouselle',
  templateUrl: './carouselle.component.html',
  styleUrls: ['./carouselle.component.css']
})
export class CarouselleComponent {
  images = [
    'assets/img/carousel-1.jpg',
    'assets/img/carousel-1.jpg',
    'assets/img/carousel-2.jpg'
  ];
}
