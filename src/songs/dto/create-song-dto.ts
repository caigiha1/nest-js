import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @IsArray()
  readonly artists: string[];

  @IsNotEmpty()
  @IsDateString()
  readonly releaseDate: string;

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly duration: string;
}
