import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'noticia01', loadChildren: './Noticias/noticia01/noticia01.module#Noticia01PageModule' },
  { path: 'home-atualidades', loadChildren: './atualidades/home-atualidades/home-atualidades.module#HomeAtualidadesPageModule' },
  { path: 'utimasnoticias', loadChildren: './atualidade/utimasnoticias/utimasnoticias.module#UtimasnoticiasPageModule' },
  { path: 'home-ultimas-noticias', loadChildren: './atualidades/home-ultimas-noticias/home-ultimas-noticias.module#HomeUltimasNoticiasPageModule' },
  { path: 'politica-home', loadChildren: './atualidades/politica-home/politica-home.module#PoliticaHomePageModule' },
  { path: 'relacoesinternacionais-home', loadChildren: './atualidades/relacoesinternacionais-home/relacoesinternacionais-home.module#RelacoesinternacionaisHomePageModule' },
  { path: 'economiahome', loadChildren: './atualidades/economiahome/economiahome.module#EconomiahomePageModule' },
  { path: 'editaisabertos', loadChildren: './editaisabertos/editaisabertos.module#EditaisabertosPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
