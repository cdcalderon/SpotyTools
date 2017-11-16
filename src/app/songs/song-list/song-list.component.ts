import { Component, OnInit } from '@angular/core';
import {Song} from "../song.model";

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  songs: Song[] = [
    new Song('regett', 'ponchito', 2017, 'nice song', 'url')
  ];

  constructor() { }

  ngOnInit() {
  }

}
