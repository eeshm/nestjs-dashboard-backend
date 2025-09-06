import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class RevenueDataDto {
  @ApiProperty({ example: 'Monday' })
  @IsString()
  name: string;

  @ApiProperty({ example: 15000 })
  @IsNumber()
  online: number;

  @ApiProperty({ example: 10000 })
  @IsNumber()
  offline: number;

  @ApiProperty({ example: 25000 })
  @IsNumber()
  total: number;
}

export class RevenueResponseDto {
  @ApiProperty({ type: [RevenueDataDto] })
  revenue: RevenueDataDto[];

  @ApiProperty({ example: 175000 })
  @IsNumber()
  totalWeeklyRevenue: number;
}