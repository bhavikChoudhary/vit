import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { TvComponent } from './product/tv/tv.component';
import { AcComponent } from './product/ac/ac.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { NgForPushSpliceComponent } from './ng-for-push-splice/ng-for-push-splice.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Card2Component } from './card2/card2.component';
import { Card1Component } from './card1/card1.component';
import { MessageService } from './appServices/message.service';
import { DesignutilityServiceService } from './appServices/designutility-service.service';
import { Exercise1Component } from './exercise1/exercise1.component';
import { Exercise1ChildComponent } from './exercise1-child/exercise1-child.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp00Component } from './comp00/comp00.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Contact2Component } from './contact2/contact2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    AboutComponent,
    LoginComponent,
    PageNotFoundComponent,
    LaptopComponent,
    TvComponent,
    AcComponent,
    MobileComponent,
    NgForPushSpliceComponent,
    NgForComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    Card2Component,
    Card1Component,
    Exercise1Component,
    Exercise1ChildComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp00Component,
    ManageProductsComponent,
    Contact2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MessageService,DesignutilityServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
