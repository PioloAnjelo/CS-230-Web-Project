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
import { TeamComponent } from './cards/routingcards/team';
import { MerchComponent } from './cards/routingcards/merch';
import { HomeLayoutComponent } from './home/home-layout.component';
import { ContactUsComponent } from './cards/routingcards/contact.component';
import { SearchInventoryComponent } from './routing-nav/search.inventory.component';
import { LetsGoBrandComponent } from './routing-nav/brand.letsgo.component';
import { PosterComponent } from './categories/poster.component';
import { NewsletterComponent } from './newsletter/newsletter';
import { BlogComponent } from './cards/routingcards/blog.component';
import { FormBarsComponent } from './categories/formbars.component';
import { JoinTeamComponent } from './cards/routingcards/jointeam';

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
    TeamComponent,
    MerchComponent,
    HomeLayoutComponent,
    ContactUsComponent,
    SearchInventoryComponent,
    LetsGoBrandComponent,
    PosterComponent,
    NewsletterComponent,
    BlogComponent,
    FormBarsComponent,
    JoinTeamComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
