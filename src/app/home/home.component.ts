import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]

})
export class HomeComponent {
  title = 'ng-carousel-demo'

  carousels = [
    {title: 'First Slide', short: 'First Slide Short', src:'assets/carasoul/carasoul1.webp'},
    {title: 'Second Slide', short: 'Second Slide Short', src: 'assets/carasoul/carasoul2.webp'},
    {title: 'Third Slide', short: 'Third Slide Short', src: 'assets/carasoul/carasoul3.jpg'}
  ];

  constructor(private config:NgbCarouselConfig){
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}
