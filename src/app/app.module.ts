import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SongsComponent } from './songs/songs.component';
import { SongListComponent } from './songs/song-list/song-list.component';
import { SongDetailComponent } from './songs/song-detail/song-detail.component';
import { SongItemComponent } from './songs/song-list/song-item/song-item.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistListComponent } from './playlists/playlist-list/playlist-list.component';
import { PlaylistEditComponent } from './playlists/playlist-list/playlist-edit/playlist-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SongsComponent,
    SongListComponent,
    SongDetailComponent,
    SongItemComponent,
    PlaylistsComponent,
    PlaylistListComponent,
    PlaylistEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path:'', component: SongListComponent},
      { path:'playlist/:id', component: PlaylistsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
