import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';

const routes: Routes = [
  {
    path: "",
    component: ClientLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: "user",
        component: UsersComponent
      }
    ],
  },
  {
    path:"admin",
    component: AdminLayoutComponent,
    children:[
      {
        path: "",
        redirectTo: "users",
        pathMatch: 'full'
      },
      {
        path: "users",
        component: UsersComponent
      }
    ]
  },
  {
    path: "products",
    children: [
      {
        path: "",
        component: AdminProductListComponent
      },
      {
        path:"create",
        component: AdminProductFormComponent
      },
      {
        path: "edit/:id",
        component: AdminProductFormComponent
      },
      {
        path:"id",
        component: AdminProductDetailComponent
      }
    ]
  }
  // {
  //   path: "users",

  //   // componetn: UsersComponent
  //   //1. nếu có children thì không dùng component để render nữa
  //   //2. Nếu vẫn muốn sử dụng component (khung layout) thì trong component sẽ phải có router-outlet
  //   children: [
  //     {
  //       path: "",
  //       component: UsersComponent,
  //     },
  //     {
  //       path:"create",
  //       component: UsersFormComponent
  //     },
  //     {
  //       path: "edit",
  //       component: UsersFormComponent
  //     },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
