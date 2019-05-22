import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocsComponent } from './docs/docs.component';
import { ExampleComponent } from './example/example.component';
import { GridTemplateComponent } from './grid-template/grid-template.component';
import { GuidesComponent } from './guides/guides.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { LinksComponent } from './links/links.component';
import { WorldMapComponent } from './world-map/world-map.component';

const routes: Routes = [
    { path: '', redirectTo: '/map', pathMatch: 'full' },
    { path: 'map', component: WorldMapComponent },
    { path: 'docs/:fname', component: DocsComponent },
    { path: 'guides/:fname', component: GuidesComponent },

    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'example', component: ExampleComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'dev/grid', component: GridTemplateComponent },
    { path: 'links', component: LinksComponent },
    { path: '**', redirectTo: '/example' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
