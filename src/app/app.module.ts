import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import { HeaderComponent } from './components/header/header.component';
import { CollaborateursPageComponent } from './pages/collaborateurs-page/collaborateurs-page.component';
import { ConjointsPageComponent } from './pages/conjoints-page/conjoints-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { EnfantsPageComponent } from './pages/enfants-page/enfants-page.component';
import { CollaborateurDetailComponent } from './components/collaborateur-detail/collaborateur-detail.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { ConjointDetailComponent } from './components/conjoint-detail/conjoint-detail.component';
import { EnfantDetailComponent } from './components/enfant-detail/enfant-detail.component';
import { ReservationDetailComponent } from './components/reservation-detail/reservation-detail.component';
import { ReservationEnfantDetailComponent } from './components/reservation-enfant-detail/reservation-enfant-detail.component';
import { ReservationReserverDetailComponent } from './components/reservation-reserver-detail/reservation-reserver-detail.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { NouveauCategoryComponent } from './pages/nouveau-category/nouveau-category.component';
import { ConjointReservationDetailComponent } from './components/conjoint-reservation-detail/conjoint-reservation-detail.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TicketsReseveeComponent } from './pages/tickets-resevee/tickets-resevee.component';
import { TicketsReservesDetailComponent } from './components/tickets-reserves-detail/tickets-reserves-detail.component';
import { PrintLayoutComponent } from './components/print-layout/print-layout.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { StatistiquesPageComponent } from './pages/statistiques-page/statistiques-page.component';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ReservationPageComponent,
    HeaderComponent,
    CollaborateursPageComponent,
    ConjointsPageComponent,
    CategoriesPageComponent,
    EnfantsPageComponent,
    CollaborateurDetailComponent,
    PaginationComponent,
    ActionButtonComponent,
    ConjointDetailComponent,
    EnfantDetailComponent,
    ReservationDetailComponent,
    ReservationEnfantDetailComponent,
    ReservationReserverDetailComponent,
    CategoryDetailComponent,
    NouveauCategoryComponent,
    ConjointReservationDetailComponent,
    NouveauCategoryComponent,
    TicketsReseveeComponent,
    TicketsReservesDetailComponent,
    PrintLayoutComponent,
    InvoiceComponent,
    StatistiquesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
