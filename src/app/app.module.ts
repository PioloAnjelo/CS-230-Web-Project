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

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    PromotionsCarouselComponent,
    HorizontalCardComponent,
    VerticalComponent,
    SocialFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
