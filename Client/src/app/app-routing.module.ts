import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { HomeComponent } from './pages/home/home.component';



const routes: Routes = [

  {path:'', component: HomeComponent },
  {path:'alta', component:CreateComponent},
  {path:'**', component: HomeComponent }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
