import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponentSeller } from './components/home/home.component';
import { AuthguardSeller } from 'src/app/guards/seller-home.guard';
import { LogincomponentSeller } from './components/login/login.component';
import { NotFoundComponent } from 'src/app/common/not-found/not-found.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { AddLandsComponent } from './components/add-lands/add-lands.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { AllDetailsComponent } from './components/all-details/all-details.component';
import { EditDetailsComponent } from './components/edit-details/edit-details.component';
import { SellerProfileComponent } from './components/seller-profile/seller-profile.component';

const routes: Routes = [
  {
    path: 'register',
    component: SignupComponent,
  },
  {
    path: 'home',
    canActivate: [AuthguardSeller],
    component: HomeComponentSeller,
  },
  {
    path: 'login',
    component: LogincomponentSeller,
  },
  { path: 'add-products', component: AddProductsComponent },
  {
    path: 'add-lands',
    component: AddLandsComponent,
  },
  {
    path: 'apartments-list',
    component: ApartmentsComponent,
  },
  {
    path: 'Property-details/:id',
    component: AllDetailsComponent,
  },
  {
    path: 'edit-details/:id',
    component: EditDetailsComponent,
  },
  {
    path: 'profile',
    component: SellerProfileComponent,
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerRoutingModule {}
