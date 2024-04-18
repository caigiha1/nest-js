import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private readonly cats: string[] = ['Cat', 'Dog', 'Bird', 'Fish'];

  findAll(): string[] {
    return this.cats;
  }

  create(cat: string) {
    this.cats.push(cat);
  }
}
