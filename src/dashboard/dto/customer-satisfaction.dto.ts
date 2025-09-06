import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CustomerSatisfactionDataDto {
  @ApiProperty({ example: 'Week 1' })
  @IsString()
  name: string;

  @ApiProperty({ example: 3.2 })
  @IsNumber()
  lastMonth: number;

  @ApiProperty({ example: 4.0 })
  @IsNumber()
  thisMonth: number;
}

export class CustomerSatisfactionResponseDto {
  @ApiProperty({ type: [CustomerSatisfactionDataDto] })
  data: CustomerSatisfactionDataDto[];

  @ApiProperty({ example: 3.6 })
  @IsNumber()
  averageLastMonth: number;

  @ApiProperty({ example: 4.2 })
  @IsNumber()
  averageThisMonth: number;

  @ApiProperty({ example: '+16.7%' })
  @IsString()
  improvement: string;
}