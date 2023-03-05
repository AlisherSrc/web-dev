import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Photo } from '../models/Photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  photos : Photo[];
  albumId !: number;
  loaded : boolean;

  constructor(private albumService : AlbumsService,
              private activeRoute : ActivatedRoute){
    this.photos = [];
    this.loaded = true;
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(){
    this.activeRoute.paramMap.subscribe((params) =>{
        this.albumId = Number(params.get("id"));
    })

    this.loaded = false;

    this.albumService.getAlbumPhotos(this.albumId).subscribe((photos) => {
      this.photos = photos;
      this.loaded = true;
    })
  }


}
