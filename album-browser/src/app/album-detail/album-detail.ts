import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../services/album';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-detail',
  imports: [RouterLink, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = true;
  saved = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(album => {
      this.album = album;
      this.loading = false;
    });
  }

  saveAlbum(): void {
    if (!this.album) return;
    this.albumService.updateAlbum(this.album).subscribe(() => {
      this.saved = true;
      setTimeout(() => this.saved = false, 2000);
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
