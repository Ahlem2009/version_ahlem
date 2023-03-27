import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { FeauturesRoutingModule } from './features.routing';


import {GestionClientComponent} from './gestion-client/gestion-client.component'
import {GestionExpertComponent} from './gestion-expert/gestion-expert.component'
import {GestionManagerComponent} from './gestion-manager/gestion-manager.component'
import {GestionOffreComponent} from './gestion-offre/gestion-offre.component';
import {BoutonCreerOffreComponent} from './gestion-offre/bouton-creer-offre/bouton-creer-offre.component'
import {CreerOffreComponent} from './gestion-offre/creer-offre/creer-offre.component';
import { CardsComponent } from './dashboard/cards/cards.component';
import { ContentComponent } from './dashboard/content/content.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { ListDocComponent } from './dashboard/list-doc/list-doc.component';
import { TicketComponent } from './dashboard/ticket/ticket.component'
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    GestionClientComponent,
    GestionExpertComponent,
    GestionManagerComponent,
    GestionOffreComponent,
    BoutonCreerOffreComponent,
    CreerOffreComponent,
    CardsComponent,
    ContentComponent,
    HeaderComponent,
    ListDocComponent,
    TicketComponent,
    DashboardComponent
  ],       
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(FeauturesRoutingModule),
    NgbHighlight
  ]
})
export class FeaturesModule { }
