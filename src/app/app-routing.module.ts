import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GalerieComponent } from './galerie/galerie.component';
import { HomeComponent } from './home/home.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { SpielerComponent } from './spieler/spieler.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'spieler', component: SpielerComponent },
  { path: 'galerie', component: GalerieComponent },
  { path: 'kontakt', component: KontaktComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
