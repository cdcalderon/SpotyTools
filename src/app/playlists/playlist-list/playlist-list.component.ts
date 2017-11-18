import { Component, OnInit } from '@angular/core';
import {Playlist} from "../playlist.model";

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css']
})
export class PlaylistListComponent implements OnInit {
  playlists: Playlist[] = [
    new Playlist('2017 top hits', 'hits'),
    new Playlist('2016 Best Rock', 'rock')
  ];

  constructor() { }

  ngOnInit() {
  }

}
