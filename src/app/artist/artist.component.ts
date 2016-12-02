import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: any[];
  albums: any[];
  constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .map(param => param['id'])
      .subscribe(id => {
        this._spotifyService.getArtist(id)
          .subscribe(artist =>
            this.artist = artist
          )

        this._spotifyService.getAlbums(id)
          .subscribe(albums => {
            this.albums = albums.items;
             console.log(this.albums);
          }
          )
      })

  }

}
