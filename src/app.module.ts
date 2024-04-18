import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middlewares/logger/logger.middleware';
import { SongsController } from './songs/songs.controller';

@Module({
  imports: [CatsModule, SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(SongsController);
  }
}
