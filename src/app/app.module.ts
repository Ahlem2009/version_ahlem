import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { AvanceComponent } from './avance/avance.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FactsComponent } from './home/facts/facts.component';
import { CartesAffichantCategoriesComponent } from './home/cartes-affichant-categories/cartes-affichant-categories.component'
import { VaerticalComponent } from './vaertical/vaertical.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { GlobaleComponent } from './globale/globale.component';
import { AbonnementComponent } from './service/abonnement/abonnement.component';
import { InscritComponent } from './inscrit/inscrit.component';
import { AfficheCategorieComponent } from './home/facts/affiche-categorie/affiche-categorie.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { ListeArticlesComponent } from './home/liste-articles/liste-articles.component';
import { AvisExpertComponent } from './home/avis-expert/avis-expert.component';
import { PartenairesComponent } from './home/partenaires/partenaires.component';
import { CarteAvisComponent } from './home/carte-avis/carte-avis.component';
import { NewsLetterComponent } from './home/news-letter/news-letter.component';
import { CarteArticleComponent } from './home/carte-article/carte-article.component';
import { CategoriesComponent } from './categories/categories.component';
import { RechercheComponent } from './recherche/recherche.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SidebarComponent } from './dashbord/sidebar/sidebar.component';
import { HeaderComponent } from './dashbord/header/header.component';
import { ContentComponent } from './dashbord/content/content.component';
import { CardsComponent } from './dashbord/cards/cards.component';
import { ListDocComponent } from './dashbord/list-doc/list-doc.component';
import { TicketComponent } from './dashbord/ticket/ticket.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ServiceComponent,
    LoginComponent,
    AvanceComponent,
    TopbarComponent,
    FactsComponent,
    VaerticalComponent,
    ListArticleComponent,
    GlobaleComponent,
    AbonnementComponent,
    InscritComponent,
    AfficheCategorieComponent,
    AboutUsComponent,
    CartesAffichantCategoriesComponent,
    ListeArticlesComponent,
    AvisExpertComponent,
    PartenairesComponent,
    CarteAvisComponent,
    NewsLetterComponent,
    CarteArticleComponent,
    CategoriesComponent,
    RechercheComponent,
    DashbordComponent,
    SidebarComponent,
    HeaderComponent,
    ContentComponent,
    CardsComponent,
    ListDocComponent,
    TicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
