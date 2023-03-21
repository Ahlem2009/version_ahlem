import { NgModule } from '@angular/core';
import { tick } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { AvanceComponent } from './avance/avance.component';
import { CategoriesComponent } from './categories/categories.component';
import { MenuCatHorizentalComponent } from './categories/menu-cat-horizental/menu-cat-horizental.component';

import { CardsComponent } from './dashbord/cards/cards.component';
import { ContentComponent } from './dashbord/content/content.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HeaderComponent } from './dashbord/header/header.component';
import { ListDocComponent } from './dashbord/list-doc/list-doc.component';
import { SidebarComponent } from './dashbord/sidebar/sidebar.component';
import { TicketComponent } from './dashbord/ticket/ticket.component';




// import { FactsComponent } from './home/facts/facts.component';
import { FooterComponent } from './footer/footer.component';
import { GlobaleComponent } from './globale/globale.component';
import { CartesAffichantCategoriesComponent } from './home/cartes-affichant-categories/cartes-affichant-categories.component';
import { HomeComponent } from './home/home.component';
import { ListeArticlesComponent } from './home/liste-articles/liste-articles.component';
import { InscritComponent } from './inscrit/inscrit.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { LoginComponent } from './login/login.component';
import { Article } from './models/article.model';
import { NavbarComponent } from './navbar/navbar.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ServiceComponent } from './service/service.component';
import { TopbarComponent } from './topbar/topbar.component';
import { VaerticalComponent } from './vaertical/vaertical.component';


const routes: Routes = [
  // {path:"footer",component:FooterComponent},
  {path:"",component:HomeComponent},
  // {path:"navbar",component:NavbarComponent},
  {path:"service",component:ServiceComponent},
  {path:"login",component:LoginComponent},
  {path:"avance",component:AvanceComponent},
  {path:"topbar",component:TopbarComponent},
  // {path:"facts",component:FactsComponent},
  {path:"vaertical",component:VaerticalComponent},
  {path:"list-article",component:ListArticleComponent},
  {path:"globale",component:GlobaleComponent},
  {path:"inscription",component:InscritComponent},
  {path:"cartes-categ",component:CartesAffichantCategoriesComponent},
  {path:"cat/:id",component:CategoriesComponent},
  {path:"recherche",component:RechercheComponent},
  {path:"dashbord",component:DashbordComponent},
  {path:"sidebar",component:SidebarComponent},
  {path:"header",component:HeaderComponent},
  {path:"content",component:ContentComponent},
  {path:"cards",component:CardsComponent},
  {path:"list-doc",component:ListDocComponent},
  {path:"ticket",component:TicketComponent},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
