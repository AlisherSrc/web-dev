import { Component, OnInit, Input } from '@angular/core';
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
  editTitleMode : boolean;
  inputTextTitle !: string;

  constructor(private albumService: AlbumsService,
              private route: ActivatedRoute) {
    this.album = {} as Album;
    this.loaded = true;
    this.editTitleMode = false;
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

  activateEditMode(){
    this.editTitleMode = true;
  }

  deactivateEditMode(){
    (this.album.title.trim().length != 0) && (this.editTitleMode = false);
  }

}
