import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BhaskaraComponent } from './bhaskara/bhaskara/bhaskara.component';
import { DeltaComponent } from './Delta/delta/delta.component';
import { HomeComponent } from './Home/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bhaskara', component: BhaskaraComponent},
  {path: 'delta', component: DeltaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
