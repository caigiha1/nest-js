import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Scope,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { Song } from './songs.entity';
import { CreateSongDto } from './dto/create-song-dto';
import { UpdateSongDto } from './dto/update-song-dto';

@Controller({
  path: 'songs',
  scope: Scope.REQUEST,
})
export class SongsController {
  constructor(private readonly songsService: SongsService) {}
  @Get()
  findAll(): Promise<Song[]> {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Song> {
    return this.songsService.findOne(id);
  }

  @Post()
  create(@Body() createSongDTO: CreateSongDto): Promise<Song> {
    return this.songsService.create(createSongDTO);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateSongDTO: UpdateSongDto,
  ): Promise<void> {
    return this.songsService.update(id, updateSongDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.songsService.remove(id);
  }
}
