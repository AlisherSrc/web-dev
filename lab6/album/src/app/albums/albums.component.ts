import { Component, OnInit } from '@angular/core';
import { Album } from '../models/Post';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums:Album[];
  loaded:boolean;

  constructor(private albumsService:AlbumsService){
    this.albums = [];
    this.loaded = true;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAlbums(); // we load albums on mounting stage
  }

  getAlbums(){
    this.loaded = false;
    // As soon as we make request we make loaded false cause we need time to load this
    this.albumsService.getAlbums().subscribe((albums)=>{
      this.albums = albums;
      this.loaded = true;
      // as soon as it loads we change it
    })
  }
}
