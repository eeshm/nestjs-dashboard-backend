# 📊 Sales Dashboard Backend

A production-ready NestJS backend API for sales analytics dashboard with TypeScript, PostgreSQL, and comprehensive documentation.

## 🚀 Features

- **RESTful APIs** for dashboard analytics
- **TypeScript** with strict typing
- **PostgreSQL** database with TypeORM
- **Swagger/OpenAPI** documentation
- **Input validation** with class-validator
- **Error handling** with global exception filters
- **CORS** enabled for frontend integration
- **Database seeding** for development
- **Modular architecture** following NestJS best practices

## 🛠️ Tech Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Validation**: class-validator, class-transformer
- **Documentation**: Swagger/OpenAPI
- **Environment**: dotenv

## 📋 Prerequisites

- Node.js 18+
- PostgreSQL 13+
- npm or yarn

## 🚀 Quick Start

### 1. Installation

```bash
# Clone the repository
git clone <repository-url>
cd sales-dashboard-backend

# Install dependencies
npm install
```

### 2. Environment Setup

Copy the example environment file and configure your settings:

```bash
cp .env.example .env
```

Update `.env` with your database credentials:

```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=your_password
DATABASE_NAME=sales_dashboard
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### 3. Database Setup

Create your PostgreSQL database:

```sql
CREATE DATABASE sales_dashboard;
```

### 4. Run the Application

```bash
# Development mode
npm run start:dev

# Production build
npm run build
npm run start:prod
```

The API will be available at:
- **API**: http://localhost:3001
- **Swagger Docs**: http://localhost:3001/api/docs

## 📚 API Endpoints

### Dashboard Analytics

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/dashboard/metrics` | Key performance indicators |
| GET | `/api/dashboard/revenue` | Revenue breakdown by channel |
| GET | `/api/dashboard/customer-satisfaction` | Customer satisfaction scores |
| GET | `/api/dashboard/visitor-insights` | Visitor analytics over time |
| GET | `/api/dashboard/top-products` | Best-selling products ranking |

### Example Response Format

All endpoints return data in this consistent format:

```json
{
  "data": {
    // Actual response data
  },
  "success": true,
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

## 🗄️ Database Schema

### Entities

- **User** - Application users (admin, manager, customer)
- **Product** - Product catalog with pricing and inventory
- **Order** - Sales transactions with customer and product relationships
- **Customer** - Customer profiles with satisfaction ratings

### Relationships

- User → Orders (1:N)
- Product → Orders (1:N)
- Customer analytics tracked separately for satisfaction metrics

## 🌱 Database Seeding

Populate your database with sample data:

```bash
npm run seed
```

This creates:
- 3 sample users (admin, manager, customer)
- 5 sample products
- 3 customer profiles
- 50 sample orders

## 🔧 Development

### Project Structure

```
src/
├── config/          # Environment configuration
├── common/          # Shared utilities (pipes, filters, interceptors)
├── dashboard/       # Dashboard module (controllers, services, DTOs)
├── entities/        # Database entities
├── database/        # Seeds and migrations
├── app.module.ts    # Root application module
└── main.ts          # Application entry point
```

### Adding New Endpoints

1. **Create DTOs** in `src/dashboard/dto/`
2. **Add service methods** in `src/dashboard/services/`
3. **Create controller endpoints** in `src/dashboard/controllers/`
4. **Update mock data** in `src/dashboard/mock-data/`


## 📦 Production Deployment

### Environment Variables

Ensure these are set in production:

```env
NODE_ENV=production
DATABASE_URL=postgresql://user:password@host:port/database
PORT=3001
FRONTEND_URL=https://your-frontend-domain.com
```

### Build & Deploy

```bash
# Build the application
npm run build

# Start production server
npm run start:prod
```
## 🔐 Security Considerations

- **Input Validation**: All DTOs use class-validator
- **CORS**: Configured for specific frontend origin
- **Environment Variables**: Sensitive data in .env files
- **Error Handling**: No sensitive information leaked in errors

## 🚀 Frontend Integration

### Axios Configuration

```typescript
// In your Next.js frontend
const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Usage
const metrics = await api.get('/api/dashboard/metrics');
```

### TypeScript Types

Generate frontend types from backend DTOs for type safety.

