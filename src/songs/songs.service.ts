import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs: string[] = ['Song1', 'Song2', 'Song3', 'Song4'];

  findAll() {
    return this.songs;
  }
  create() {
    return this.songs.push('Song5');
  }

  findOne(id: string) {
    return this.songs[id];
  }

  update(id: string) {
    return this.songs[id];
  }

  remove(id: string) {
    return this.songs[id];
  }
}
