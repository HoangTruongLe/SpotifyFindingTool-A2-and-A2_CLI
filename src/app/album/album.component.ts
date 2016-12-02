import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  private album: any[];
  constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .map(param => param["id"])
      .subscribe(id => {
        this._spotifyService.getAlbum(id).subscribe(album => {
          this.album = album;
           console.log(this.album);
        });
       
      })
  }

}
