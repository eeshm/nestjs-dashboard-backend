import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class TopProductDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  id: number;

  @ApiProperty({ example: 'Home Decor Range' })
  @IsString()
  name: string;

  @ApiProperty({ example: 45 })
  @IsNumber()
  popularity: number;

  @ApiProperty({ example: '45%' })
  @IsString()
  sales: string;

  @ApiProperty({ example: '$125,000' })
  @IsString()
  revenue: string;

  @ApiProperty({ example: 1250 })
  @IsNumber()
  unitsSold: number;
}

export class TopProductsResponseDto {
  @ApiProperty({ type: [TopProductDto] })
  products: TopProductDto[];

  @ApiProperty({ example: 4 })
  @IsNumber()
  totalProducts: number;
}