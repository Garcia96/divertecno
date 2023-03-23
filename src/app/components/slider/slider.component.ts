import { Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input() slides: any;
  @Input() duration: number = 1000;
  config: SwiperOptions = {};

  ngOnInit(): void {
    this.config = {
      autoplay: {
        delay: this.duration,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
    };
  }
}
