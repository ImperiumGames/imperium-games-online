import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExampleComponent } from './example/example.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesComponent } from './heroes/heroes.component';
import { InMemoryDataService } from './in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';
import { GuidesComponent } from './guides/guides.component';
import { MarkdownModule } from 'ngx-markdown';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';
import { WorldMapComponent } from './world-map/world-map.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { GridTemplateComponent } from './grid-template/grid-template.component';
import { DisqusModule } from 'ngx-disqus';
import { LinksComponent } from './links/links.component';
import { SpeedDialFabComponent } from './speed-dial-fab/speed-dial-fab.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DocsComponent } from './docs/docs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    ExampleComponent,
    GuidesComponent,
    WorldMapComponent,
    GridTemplateComponent,
    LinksComponent,
    SpeedDialFabComponent,
    DocsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
    //     dataEncapsulation: false
    // }),

    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatTreeModule,
    MatTabsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTooltipModule,
    DisqusModule.forRoot('imperiumgames'),
    MarkdownModule.forRoot({ loader: HttpClientModule }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
