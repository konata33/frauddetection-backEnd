import { Transform } from 'class-transformer'
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateGoodsDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  securityCode: string
}

export class UpdateGoodsDto {
  @IsString()
  @IsOptional()
  name?: string

  @IsString()
  @IsOptional()
  securityCode?: string
}

export class QueryGoodsDto {
  @IsInt()
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  page?: number

  @IsInt()
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  limit?: number
}
