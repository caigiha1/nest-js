import {
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  findAll() {
    try {
      return this.songsService.findAll();
    } catch (e) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: e.message,
        },
      );
    }
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return `this fetch song base provide ${typeof id}`;
  }

  @Post()
  create() {
    return this.songsService.create();
  }

  @Put(':id')
  update(id: string) {
    return this.songsService.update(id);
  }

  @Delete(':id')
  remove(id: string) {
    return this.songsService.remove(id);
  }
}
