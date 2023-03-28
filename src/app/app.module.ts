import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { AllGamesComponent } from './all-games/all-games.component';
import { NewGamesComponent } from './new-games/new-games.component';
import { TopGamesComponent } from './top-games/top-games.component';
import { LoginComponent } from './login/login.component';
import { CommunityComponent } from './community/community.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionComponent } from './subscription/subscription.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbCarousel, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentredirectComponent } from './paymentredirect/paymentredirect.component';



const routes : Routes = [
  { path: 'home', component:HomeComponent, title:'GameOn | Home' },
  { path: 'games', component:GamesComponent, title:'GameOn | Games' },
  { path : 'all-games',redirectTo:'/games', pathMatch: 'full'},
  { path: 'top-rated', component:TopGamesComponent, title:'GameOn | Top Rated' },
  { path: 'new-release', component:NewGamesComponent, title:'GameOn | New Release' },
  { path: 'login', component:LoginComponent, title:'GameOn | Sign In' },
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path : 'subscription', component: SubscriptionComponent, title: 'GameOn | Subscription'},
  { path: 'signup', component:SignupComponent, title: 'GameOn | Signup'},
  { path:'forgetpassword', component:ForgetpasswordComponent, title:'GameOn | Forget' },
  { path: 'payment', component:PaymentComponent, title: 'Payment Gateway' },
  { path:'redirect', component :PaymentredirectComponent, title:'Redirect' },
  { path:'**', component:PagenotfoundComponent, title:'404' },

]

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    AllGamesComponent,
    NewGamesComponent,
    TopGamesComponent,
    LoginComponent,
    CommunityComponent,
    SubscriptionComponent,
    HomeComponent,
    SignupComponent,
    ForgetpasswordComponent,
    PagenotfoundComponent,
    PaymentComponent,
    PaymentredirectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbCarousel,
    NgbCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
