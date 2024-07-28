import { Inject, Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/DevConfigService';

@Injectable()
export class AppService {
  constructor(
    private devConfigService: DevConfigService,
    @Inject('CONFIG')
    private config: { port: string },
  ) {
    // Log the port when the service is instantiated
    console.log(`Port: ${this.config.port}`);
  }
  getHello(): string {
    return `Hello im learning Nest.js fundamentals ${this.devConfigService.getDBHOST()}! ${this.config.port}`;
  }
}
