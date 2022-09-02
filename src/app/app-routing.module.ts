import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { PrintLayoutComponent } from './components/print-layout/print-layout.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { CollaborateursPageComponent } from './pages/collaborateurs-page/collaborateurs-page.component';
import { ConjointsPageComponent } from './pages/conjoints-page/conjoints-page.component';
import { EnfantsPageComponent } from './pages/enfants-page/enfants-page.component';
import { HomeComponent } from './pages/home/home.component';
import { NouveauCategoryComponent } from './pages/nouveau-category/nouveau-category.component';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import { StatistiquesPageComponent } from './pages/statistiques-page/statistiques-page.component';
import { TicketsReseveeComponent } from './pages/tickets-resevee/tickets-resevee.component';

const routes: Routes = [
  {path : 'reservation' , component: ReservationPageComponent },
 { path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'invoice/:colMat', component: InvoiceComponent }
    ]
  },
  
  { path : 'collaborateurs' , component : CollaborateursPageComponent },
  {path : 'conjoints' , component : ConjointsPageComponent},
  { path : 'categories' , component : CategoriesPageComponent },
  {path : 'enfants' , component : EnfantsPageComponent},
  { path : 'nouveauCategory' , component : NouveauCategoryComponent },
  { path : 'nouveauCategory/:idTypeTicket' , component : NouveauCategoryComponent },
  { path : 'ticketsReseves' , component : TicketsReseveeComponent },
  { path : 'statistiques' , component : StatistiquesPageComponent },
    { path : '**', component : ReservationPageComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
