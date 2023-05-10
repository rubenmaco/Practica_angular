import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { StoreComponent } from './pages/store/store.component';
import { CategoryListComponent } from './pages/store/category-list/category-list.component';
import { ArticleListComponent } from './pages/store/article-list/article-list.component';
import { ArticleCardComponent } from './pages/store/article-list/article-card/article-card.component';
import { ArticleDetailsComponent } from './pages/store/article-details/article-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    HomeComponent,
    AboutUsComponent,
    StoreComponent,
    CategoryListComponent,
    ArticleListComponent,
    ArticleCardComponent,
    ArticleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
