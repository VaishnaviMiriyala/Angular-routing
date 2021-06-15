import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LaptopComponent } from './laptop/laptop.component';
import { CameraComponent } from './camera/camera.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const appRoutes:Routes=[

  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'laptop',component : LaptopComponent},
  {path:'camera',component : CameraComponent},
  {path:'cart',component : CartComponent},
  {path:'login',component : LoginComponent},
  {path:'admin',component : AdminComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LaptopComponent,
    CameraComponent,
    LoginComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
