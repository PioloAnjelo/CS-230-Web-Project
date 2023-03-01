import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ToyotaCaresComponent } from './cards/routingcards/toyotacares.component';
import { SmartPathComponent } from './cards/routingcards/smartpath.component';
import { HomeLayoutComponent } from './home/home-layout.component';
import { ToyotaBrandComponent } from './cards/routingcards/toyotabrand.component';
import { SearchInventoryComponent } from './routing-nav/search.inventory.component';
import { LetsGoBrandComponent } from './routing-nav/brand.letsgo.component';

const routes: Routes = [
  {path: '',component: HomeLayoutComponent},
  {path: 'home',component: HomeLayoutComponent},
  {path: 'Toyota-Cares', component: ToyotaCaresComponent},
  {path: 'Smart-Path', component: SmartPathComponent},
  {path: 'Toyota-Brand', component: ToyotaBrandComponent},
  {path: 'Search-Inventory', component: SearchInventoryComponent},
  {path: 'Brand', component: LetsGoBrandComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
],
exports:[
  RouterModule 
]
})
export class AppRoutingModule { }
