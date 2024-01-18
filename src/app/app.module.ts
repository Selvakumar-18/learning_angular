import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CrudTableComponent } from './crud-table/crud-table.component';
import { CrudCardComponent } from './crud-card/crud-card.component';

import { RouterModule ,Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { AddCartComponent } from './add-cart/add-cart.component';
import { LearnServiceService } from './learn-service.service';

const routes :Routes =[
  {path: 'home',component: HomeComponent},
  {path: 'table',component: CrudTableComponent},
  {path: 'card',component: CrudCardComponent},
  {path : 'addCart', component : AddCartComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrudTableComponent,
    CrudCardComponent,
    AddCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatePipe,LearnServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
