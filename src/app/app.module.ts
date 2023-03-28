import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TopNavBarComponent } from './navigation/top-nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { PromotionsCarouselComponent } from './categories/promotions.carousel.component';
import { HorizontalCardComponent } from './cards/horizontal.card.component';
import { VerticalComponent } from './cards/vertical.card.component';
import { SocialFooterComponent } from './footer/social.footer.component';
import { WebNavComponent } from './navigation/webnav.component';
import { ToyotaCaresComponent } from './cards/routingcards/toyotacares.component';
import { SmartPathComponent } from './cards/routingcards/smartpath.component';
import { HomeLayoutComponent } from './home/home-layout.component';
import { ToyotaBrandComponent } from './cards/routingcards/toyotabrand.component';
import { SearchInventoryComponent } from './routing-nav/search.inventory.component';
import { LetsGoBrandComponent } from './routing-nav/brand.letsgo.component';
import { PosterComponent } from './categories/poster.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    PromotionsCarouselComponent,
    HorizontalCardComponent,
    VerticalComponent,
    SocialFooterComponent,
    WebNavComponent,
    ToyotaCaresComponent,
    SmartPathComponent,
    HomeLayoutComponent,
    ToyotaBrandComponent,
    SearchInventoryComponent,
    LetsGoBrandComponent,
    PosterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
