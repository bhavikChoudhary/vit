import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Contact2Component } from './contact2/contact2.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { AcComponent } from './product/ac/ac.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { TvComponent } from './product/tv/tv.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'about', component:AboutComponent},
  {path:'parent', component:ParentComponent},
  {path:'product', component:ProductComponent, children:[
    {path:'laptop', component:LaptopComponent},
    {path:'tv', component:TvComponent},
    {path:'ac', component:AcComponent},
    {path:'mobile', component:MobileComponent},
  ]},
  {path:'contact', component:ContactComponent},
  {path:'contact2', component:Contact2Component},
  {path:'manage-products', component:ManageProductsComponent},
  {path:'exercise1', component:Exercise1Component},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
