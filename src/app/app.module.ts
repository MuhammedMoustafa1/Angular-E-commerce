import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductlistComponent } from './Components/Order/productlist/productlist.component';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directives/light-box.directive';
import { USDtoEGPPipe } from './Pipes/usdto-egp.pipe';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { StaticProductsService } from './Services/static-products.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductlistComponent,
    LightBoxDirective,
    USDtoEGPPipe,
    OrderMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    //StaticProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
