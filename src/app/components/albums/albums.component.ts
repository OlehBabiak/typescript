import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/Post";
import {Album} from "../../models/Album";
import {PostService} from "../../services/post.service";
import {AlbumService} from "../../services/album.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  @Input()
  userId:number
  albums: Album[] = []
  constructor(private albumService: AlbumService) {
  }

  ngOnInit(): void {
    this.albumService.getAlbumsByUserId(this.userId).subscribe(value => {
      this.albums = value
    })
  }

}
