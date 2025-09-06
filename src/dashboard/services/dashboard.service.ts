import { Injectable, Logger } from '@nestjs/common';
import {
    CustomerSatisfactionResponseDto,
} from '../dto/customer-satisfaction.dto'
import {MetricsResponseDto} from '../dto/metrics.dto'
import {VisitorInsightsResponseDto} from '../dto/visitor-insights.dto'
import {RevenueResponseDto} from '../dto/revenue.dto'
import {TopProductsResponseDto} from '../dto/top-products.dto'
import {
  mockMetrics,
  mockRevenueData,
  mockCustomerSatisfactionData,
  mockVisitorInsightsData,
  mockTopProductsData,
} from '../mock-data/dashboard.mock';

@Injectable()
export class DashboardService {
  private readonly logger = new Logger(DashboardService.name);

  async getMetrics(): Promise<MetricsResponseDto> {
    this.logger.log('Fetching dashboard metrics');
    
    // TODO: Replace with actual database queries
    // const metrics = await this.metricsRepository.getLatestMetrics();
    
    return {
      metrics: mockMetrics,
    };
  }

  async getRevenue(): Promise<RevenueResponseDto> {
    this.logger.log('Fetching revenue data');
    
    // TODO: Replace with actual database queries
    // const revenue = await this.revenueRepository.getWeeklyRevenue();
    
    const totalWeeklyRevenue = mockRevenueData.reduce(
      (sum, item) => sum + item.total,
      0,
    );

    return {
      revenue: mockRevenueData,
      totalWeeklyRevenue,
    };
  }

  async getCustomerSatisfaction(): Promise<CustomerSatisfactionResponseDto> {
    this.logger.log('Fetching customer satisfaction data');
    
    // TODO: Replace with actual database queries
    // const satisfaction = await this.satisfactionRepository.getMonthlyData();

    const averageLastMonth =
      mockCustomerSatisfactionData.reduce(
        (sum, item) => sum + item.lastMonth,
        0,
      ) / mockCustomerSatisfactionData.length;

    const averageThisMonth =
      mockCustomerSatisfactionData.reduce(
        (sum, item) => sum + item.thisMonth,
        0,
      ) / mockCustomerSatisfactionData.length;

    const improvement = (
      ((averageThisMonth - averageLastMonth) / averageLastMonth) *
      100
    ).toFixed(1);

    return {
      data: mockCustomerSatisfactionData,
      averageLastMonth: Number(averageLastMonth.toFixed(2)),
      averageThisMonth: Number(averageThisMonth.toFixed(2)),
      improvement: `+${improvement}%`,
    };
  }

  async getVisitorInsights(): Promise<VisitorInsightsResponseDto> {
    this.logger.log('Fetching visitor insights data');
    
    // TODO: Replace with actual database queries
    // const insights = await this.visitorRepository.getYearlyInsights();

    const totalLoyalCustomers = mockVisitorInsightsData.reduce(
      (sum, item) => sum + item.loyalCustomers,
      0,
    );

    const totalNewCustomers = mockVisitorInsightsData.reduce(
      (sum, item) => sum + item.newCustomers,
      0,
    );

    const totalUniqueCustomers = mockVisitorInsightsData.reduce(
      (sum, item) => sum + item.uniqueCustomers,
      0,
    );

    return {
      data: mockVisitorInsightsData,
      totalLoyalCustomers,
      totalNewCustomers,
      totalUniqueCustomers,
    };
  }

  async getTopProducts(): Promise<TopProductsResponseDto> {
    this.logger.log('Fetching top products data');
    
    // TODO: Replace with actual database queries
    // const products = await this.productRepository.getTopProducts(10);

    return {
      products: mockTopProductsData,
      totalProducts: mockTopProductsData.length,
    };
  }
}