export class Song {
  public name: string;
  public artist: string;
  public year: number;
  public description: string;
  public albumImagePath: string;

  constructor(name: string, artist: string, year: number, description: string, albumImagePath: string) {
    this.name = name;
    this.artist = artist;
    this.year = year;
    this.description = description;
    this.albumImagePath = albumImagePath;
  }
}
