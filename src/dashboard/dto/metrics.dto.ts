import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class MetricItemDto {
  @ApiProperty({ example: 'total_sales' })
  @IsString()
  id: string;

  @ApiProperty({ example: 'Total Sales' })
  @IsString()
  title: string;

  @ApiProperty({ example: '$1,250,000' })
  value: string | number;

  @ApiProperty({ example: '+3% from yesterday' })
  @IsString()
  subtitle: string;

  @ApiProperty({ example: '+3%' })
  @IsString()
  percentage: string;

  @ApiProperty({ example: 'pink' })
  @IsString()
  color: 'pink' | 'orange' | 'green' | 'purple';

  @ApiProperty({ example: '💰' })
  @IsString()
  icon: string;
}

export class MetricsResponseDto {
  @ApiProperty({ type: [MetricItemDto] })
  metrics: MetricItemDto[];
}