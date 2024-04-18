import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): string[] {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return this.catsService.findOne(id);
  }

  @Post()
  create() {
    return this.catsService.create('Cat');
  }

  @Put(':id')
  update(@Param('id') id: string): string {
    return this.catsService.update(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return this.catsService.remove(id);
  }
}
