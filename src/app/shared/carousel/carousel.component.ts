import { Component, OnInit } from '@angular/core';
import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: any[] = [];

  constructor(private carouselService: CarouselService) { }

  ngOnInit(): void {
    this.carouselService.getImages().subscribe(images => {
      this.images = images;
    });
  }
}

