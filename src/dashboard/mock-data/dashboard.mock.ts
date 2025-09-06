import {
    CustomerSatisfactionDataDto,
} from '../dto/customer-satisfaction.dto'
import {MetricItemDto} from '../dto/metrics.dto'
import {VisitorInsightsDataDto} from '../dto/visitor-insights.dto'
import {RevenueDataDto} from '../dto/revenue.dto'
import {TopProductDto} from '../dto/top-products.dto'


export const mockMetrics: MetricItemDto[] = [
  {
    id: 'total_sales',
    title: 'Total Sales',
    value: '$1,250,000',
    subtitle: '+3% from yesterday',
    percentage: '+3%',
    color: 'pink',
    icon: '💰',
  },
  {
    id: 'total_orders',
    title: 'Total Orders',
    value: 4580,
    subtitle: '+5% from yesterday',
    percentage: '+5%',
    color: 'orange',
    icon: '📦',
  },
  {
    id: 'products_sold',
    title: 'Products Sold',
    value: 2340,
    subtitle: '+1.2% from yesterday',
    percentage: '+1.2%',
    color: 'green',
    icon: '✅',
  },
  {
    id: 'new_customers',
    title: 'New Customers',
    value: 234,
    subtitle: '0.5% from yesterday',
    percentage: '+0.5%',
    color: 'purple',
    icon: '👥',
  },
];

export const mockRevenueData: RevenueDataDto[] = [
  { name: 'Monday', online: 15000, offline: 10000, total: 25000 },
  { name: 'Tuesday', online: 18000, offline: 12000, total: 30000 },
  { name: 'Wednesday', online: 8000, offline: 25000, total: 33000 },
  { name: 'Thursday', online: 20000, offline: 5000, total: 25000 },
  { name: 'Friday', online: 12000, offline: 15000, total: 27000 },
  { name: 'Saturday', online: 22000, offline: 18000, total: 40000 },
  { name: 'Sunday', online: 25000, offline: 12000, total: 37000 },
];

export const mockCustomerSatisfactionData: CustomerSatisfactionDataDto[] = [
  { name: 'Week 1', lastMonth: 3.2, thisMonth: 4.0 },
  { name: 'Week 2', lastMonth: 3.5, thisMonth: 4.2 },
  { name: 'Week 3', lastMonth: 3.1, thisMonth: 4.1 },
  { name: 'Week 4', lastMonth: 3.8, thisMonth: 4.5 },
];

export const mockVisitorInsightsData: VisitorInsightsDataDto[] = [
  { name: 'Jan', loyalCustomers: 200, newCustomers: 150, uniqueCustomers: 100 },
  { name: 'Feb', loyalCustomers: 180, newCustomers: 200, uniqueCustomers: 120 },
  { name: 'Mar', loyalCustomers: 220, newCustomers: 180, uniqueCustomers: 140 },
  { name: 'Apr', loyalCustomers: 280, newCustomers: 220, uniqueCustomers: 160 },
  { name: 'May', loyalCustomers: 250, newCustomers: 350, uniqueCustomers: 180 },
  { name: 'Jun', loyalCustomers: 320, newCustomers: 300, uniqueCustomers: 200 },
  { name: 'Jul', loyalCustomers: 280, newCustomers: 380, uniqueCustomers: 220 },
  { name: 'Aug', loyalCustomers: 350, newCustomers: 320, uniqueCustomers: 180 },
  { name: 'Sep', loyalCustomers: 300, newCustomers: 280, uniqueCustomers: 160 },
  { name: 'Oct', loyalCustomers: 280, newCustomers: 250, uniqueCustomers: 140 },
  { name: 'Nov', loyalCustomers: 250, newCustomers: 180, uniqueCustomers: 120 },
  { name: 'Dec', loyalCustomers: 320, newCustomers: 220, uniqueCustomers: 160 },
];

export const mockTopProductsData: TopProductDto[] = [
  {
    id: 1,
    name: 'Home Decor Range',
    popularity: 45,
    sales: '45%',
    revenue: '$125,000',
    unitsSold: 1250,
  },
  {
    id: 2,
    name: 'Disney Princess Pink Bag 13',
    popularity: 29,
    sales: '29%',
    revenue: '$89,500',
    unitsSold: 895,
  },
  {
    id: 3,
    name: 'Bathroom Essentials',
    popularity: 18,
    sales: '18%',
    revenue: '$45,200',
    unitsSold: 452,
  },
  {
    id: 4,
    name: 'Apple Smartwatches',
    popularity: 25,
    sales: '25%',
    revenue: '$156,000',
    unitsSold: 624,
  },
  {
    id: 5,
    name: 'Gaming Accessories',
    popularity: 35,
    sales: '35%',
    revenue: '$98,750',
    unitsSold: 987,
  },
];