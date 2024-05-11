import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { connection } from '../common/constants/connection';

@Module({
  providers: [
    {
      provide: SongsService,
      useClass: SongsService,
    },
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ],
  controllers: [SongsController],
})
export class SongsModule {}
