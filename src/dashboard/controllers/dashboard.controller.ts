import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DashboardService } from '../services/dashboard.service';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import {
    CustomerSatisfactionResponseDto,
} from '../dto/customer-satisfaction.dto'
import {MetricsResponseDto} from '../dto/metrics.dto'
import {VisitorInsightsResponseDto} from '../dto/visitor-insights.dto'
import {RevenueResponseDto} from '../dto/revenue.dto'
import {TopProductsResponseDto} from '../dto/top-products.dto'

@ApiTags('Dashboard')
@Controller('api/dashboard')
@UseInterceptors(TransformInterceptor)
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('metrics')
  @ApiOperation({ 
    summary: 'Get dashboard metrics',
    description: 'Retrieve key performance indicators including total sales, orders, products sold, and new customers'
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved dashboard metrics',
    type: MetricsResponseDto,
  })
  async getMetrics(): Promise<MetricsResponseDto> {
    return await this.dashboardService.getMetrics();
  }

  @Get('revenue')
  @ApiOperation({ 
    summary: 'Get revenue data',
    description: 'Retrieve weekly revenue breakdown including online and offline sales'
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved revenue data',
    type: RevenueResponseDto,
  })
  async getRevenue(): Promise<RevenueResponseDto> {
    return await this.dashboardService.getRevenue();
  }

  @Get('customer-satisfaction')
  @ApiOperation({ 
    summary: 'Get customer satisfaction data',
    description: 'Retrieve customer satisfaction scores and trends over time'
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved customer satisfaction data',
    type: CustomerSatisfactionResponseDto,
  })
  async getCustomerSatisfaction(): Promise<CustomerSatisfactionResponseDto> {
    return await this.dashboardService.getCustomerSatisfaction();
  }

  @Get('visitor-insights')
  @ApiOperation({ 
    summary: 'Get visitor insights',
    description: 'Retrieve visitor analytics including loyal, new, and unique customers over time'
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved visitor insights',
    type: VisitorInsightsResponseDto,
  })
  async getVisitorInsights(): Promise<VisitorInsightsResponseDto> {
    return await this.dashboardService.getVisitorInsights();
  }

  @Get('top-products')
  @ApiOperation({ 
    summary: 'Get top products',
    description: 'Retrieve ranking of best-selling products with sales metrics'
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved top products',
    type: TopProductsResponseDto,
  })
  async getTopProducts(): Promise<TopProductsResponseDto> {
    return await this.dashboardService.getTopProducts();
  }
}