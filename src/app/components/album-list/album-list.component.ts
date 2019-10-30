import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  
  dataSource  = [];
  tableColumns : string[] = ['userId', 'id', 'title'];

  constructor(private dataService: AlbumsService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe((result)=>{    
      this.dataSource  = result;
      // console.log({result:result});
      // console.log(this.dataSource);
    })    
  }

}
