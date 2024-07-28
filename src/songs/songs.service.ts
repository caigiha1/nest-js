import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './songs.entity';
import { Repository } from 'typeorm';
import { CreateSongDto } from './dto/create-song-dto';
import { UpdateSongDto } from './dto/update-song-dto';

@Injectable({
  scope: Scope.TRANSIENT,
})
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private songsRepository: Repository<Song>,
  ) {}

  async findAll(): Promise<Song[]> {
    return this.songsRepository.find();
  }

  async findOne(id: number): Promise<Song> {
    return this.songsRepository.findOneBy({ id });
  }

  async create(songDTO: CreateSongDto): Promise<Song> {
    const song = new Song();

    song.title = songDTO.title;

    song.artists = songDTO.artists;

    song.duration = songDTO.duration;

    song.lyrics = songDTO.lyrics;

    song.releasedDate = songDTO.releaseDate;

    return await this.songsRepository.save(song);
  }

  async update(id: number, recordToUpdate: UpdateSongDto): Promise<void> {
    await this.songsRepository.update(id, recordToUpdate);
  }

  async remove(id: number): Promise<void> {
    await this.songsRepository.delete(id);
  }
}
