import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateSongDto {
  @IsString()
  @IsOptional()
  readonly title?: string;

  @IsOptional()
  @IsString({
    each: true,
  })
  readonly artists?: string[];

  @IsDateString()
  @IsOptional()
  readonly releasedDate?: string;

  @IsMilitaryTime()
  @IsOptional()
  readonly duration?: string;

  @IsString()
  @IsOptional()
  readonly lyrics?: string;
}
