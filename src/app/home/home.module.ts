import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { SwiperModule } from 'swiper/angular';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        HomeComponent,
        BannerComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SwiperModule
    ]
})

export class HomeModule{

}