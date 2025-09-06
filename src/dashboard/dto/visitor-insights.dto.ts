import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class VisitorInsightsDataDto {
  @ApiProperty({ example: 'Jan' })
  @IsString()
  name: string;

  @ApiProperty({ example: 200 })
  @IsNumber()
  loyalCustomers: number;

  @ApiProperty({ example: 150 })
  @IsNumber()
  newCustomers: number;

  @ApiProperty({ example: 100 })
  @IsNumber()
  uniqueCustomers: number;
}

export class VisitorInsightsResponseDto {
  @ApiProperty({ type: [VisitorInsightsDataDto] })
  data: VisitorInsightsDataDto[];

  @ApiProperty({ example: 2850 })
  @IsNumber()
  totalLoyalCustomers: number;

  @ApiProperty({ example: 2580 })
  @IsNumber()
  totalNewCustomers: number;

  @ApiProperty({ example: 1820 })
  @IsNumber()
  totalUniqueCustomers: number;
}