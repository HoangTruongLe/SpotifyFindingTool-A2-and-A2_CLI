import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }

];
const childRoutes: Routes = [
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'album/:id', component: AlbumComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
  providers: []
})
export class NgspotifyRoutingModule { }
