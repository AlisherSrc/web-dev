import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../models/Post';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album;
  loaded: boolean;

  constructor(private albumService: AlbumsService,
              private route: ActivatedRoute) {
    this.album = {} as Album;
    this.loaded = true;
  }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum() {
    // We are getting parameters of the url
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));

      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album)=>{
        this.album = album;
        this.loaded = true;
      })
    })
  }
}
