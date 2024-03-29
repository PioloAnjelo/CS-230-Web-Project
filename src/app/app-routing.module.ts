import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MerchComponent } from './cards/routingcards/merch';
import { HomeLayoutComponent } from './home/home-layout.component';
import { ContactUsComponent } from './cards/routingcards/contact.component';
import { TeamComponent } from './cards/routingcards/team';
import { BlogComponent } from './cards/routingcards/blog.component';
import { JoinTeamComponent } from './cards/routingcards/jointeam';

const routes: Routes = [
  {path: '',component: HomeLayoutComponent},
  {path: 'contact',component: ContactUsComponent},
  {path: 'team', component: TeamComponent},
  {path: 'join-team', component: JoinTeamComponent},
  {path: 'merch', component: MerchComponent},
  {path: 'blog', component: BlogComponent},
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
