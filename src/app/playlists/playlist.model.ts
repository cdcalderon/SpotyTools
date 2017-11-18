import {Song} from "../songs/song.model";
export class Playlist {
  public songs: Song[];
  constructor(public name: string, public genre: string) {}
}
