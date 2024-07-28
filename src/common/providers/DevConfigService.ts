import { Injectable } from '@nestjs/common';

@Injectable()
export class DevConfigService {
  DBHOST: string = 'localhost';
  getDBHOST() {
    return this.DBHOST;
  }
}
