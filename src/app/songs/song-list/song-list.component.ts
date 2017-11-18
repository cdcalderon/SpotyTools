import { Component, OnInit } from '@angular/core';
import {Song} from "../song.model";

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  songs: Song[] = [
    new Song('regett', 'ponchito', 2017, 'nice song',
      'https://images-na.ssl-images-amazon.com/images/I/61uwB2wOVbL._AC_US436_QL65_.jpg'),
    new Song('regett', 'ponchito', 2017, 'nice song',
      'https://images-na.ssl-images-amazon.com/images/I/61uwB2wOVbL._AC_US436_QL65_.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
