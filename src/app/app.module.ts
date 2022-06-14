import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { ShowvalidateComponent } from './components/showvalidate/showvalidate.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/auth/login/login.component';
import { HeaderComponent } from './layouts/client-layout/header/header.component';
import { BannerComponent } from './layouts/client-layout/banner/banner.component';
import { FooterComponent } from './layouts/client-layout/footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsDetailComponent } from './pages/products/products-detail/products-detail.component';
import { ProductsCategoryComponent } from './pages/products/products-category/products-category.component';
import { ProductsHomeComponent } from './pages/products/products-home/products-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowvalidateComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    AdminProductDetailComponent,
    AdminProductFormComponent,
    AdminProductListComponent,
    LoginComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    ProductsComponent,
    ProductsDetailComponent,
    ProductsCategoryComponent,
    ProductsHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
