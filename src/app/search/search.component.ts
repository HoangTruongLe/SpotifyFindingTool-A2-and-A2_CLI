import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchValue: string;
  searchArr:any;
  constructor(private _spotify: SpotifyService) { }

  ngOnInit() {
  }
  searchSong() {
    this._spotify.searchMusic(this.searchValue).subscribe(res => {
     this.searchArr =res.artists.items;
    });
  }

}
