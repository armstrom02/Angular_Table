import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { HighlightDirective } from './highlight.directive';
import { RouterModule, Routes } from '@angular/router';
import { SearchPipe } from './search.pipe';
import { WelcomeComponent } from './welcome/welcome.component';


const appRoutes: Routes = [
  
   { path: 'Customer', component: CustomerListComponent },
   { path: 'Home', component: WelcomeComponent },
   { path: '',redirectTo: 'Home', pathMatch: 'full' },
   { path: 'detail/:ID/:firstname/:lastname/:email/:active/:datec/:dateu/:rating', component: CustomerDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomerDetailComponent,
    //SearchDetailComponent,
    CustomerListComponent,
    HighlightDirective,
    SearchPipe,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const routingComponents =[CustomerListComponent]
