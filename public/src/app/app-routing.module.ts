import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SupportComponent } from './support/support.component';
import { ProfileComponent } from './profile/profile.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  {path: '', component: SearchComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'support', component: SupportComponent},
  {path: 'purchase', component: PurchaseComponent},
  {path: 'about', component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
