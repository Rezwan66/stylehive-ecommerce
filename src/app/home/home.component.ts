import { Component } from '@angular/core';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { menJeans } from '../../Data/Men/men_jeans';
import { gounsPage1 } from '../../Data/Gouns/gouns';
// import { lengha_page1 } from '../../Data/Women/LenghaCholi';
// import { kurtaPage1 } from '../../Data/Kurta/kurta';
import { mensShoesPage1 } from '../../Data/shoes';
import { mens_kurta } from '../../Data/Men/men_kurta';
import { lehngacholiPage2 } from '../../Data/Saree/lenghaCholiPage2';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainCarouselComponent, ProductSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  menJeans: any;
  womenGowns: any;
  lehengaCholi: any;
  mensKurta: any;
  shoes: any;
  ngOnInit() {
    this.menJeans = menJeans.slice(0, 5);
    this.womenGowns = gounsPage1.slice(0, 5);
    this.lehengaCholi = lehngacholiPage2.slice(0, 5);
    this.mensKurta = mens_kurta.slice(0, 5);
    this.shoes = mensShoesPage1.slice(0, 5);
  }
}
