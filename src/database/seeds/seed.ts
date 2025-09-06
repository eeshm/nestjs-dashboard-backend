import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../app.module';
import { getConnection } from 'typeorm';
import { User } from '../../entities/user.entity';
import { Product } from '../../entities/product.entity';
import { Order } from '../../entities/order.entity';
import { Customer } from '../../entities/customer.entity';

async function seed() {
  console.log('Starting database seeding...');
  
  const app = await NestFactory.createApplicationContext(AppModule);
  const connection = getConnection();

  try {
    // Clear existing data
    await connection.query('TRUNCATE TABLE "orders" CASCADE');
    await connection.query('TRUNCATE TABLE "customers" CASCADE');
    await connection.query('TRUNCATE TABLE "products" CASCADE');
    await connection.query('TRUNCATE TABLE "users" CASCADE');

    // Seed Users
    const userRepository = connection.getRepository(User);
    const users = await userRepository.save([
      {
        email: 'admin@dashboard.com',
        firstName: 'Admin',
        lastName: 'User',
        phone: '+1-555-0001',
        role: 'admin',
      },
      {
        email: 'manager@dashboard.com',
        firstName: 'Sales',
        lastName: 'Manager',
        phone: '+1-555-0002',
        role: 'manager',
      },
      {
        email: 'john.doe@customer.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '+1-555-0003',
        role: 'customer',
      },
    ]);

    console.log(`Seeded ${users.length} users`);

    // Seed Products
    const productRepository = connection.getRepository(Product);
    const products = await productRepository.save([
      {
        name: 'Home Decor Range',
        description: 'Beautiful home decoration items',
        price: 99.99,
        stock: 150,
        category: 'Home & Garden',
        imageUrl: '/images/home-decor.jpg',
      },
      {
        name: 'Disney Princess Pink Bag 13',
        description: 'Official Disney princess themed bag',
        price: 29.99,
        stock: 200,
        category: 'Kids & Baby',
        imageUrl: '/images/disney-bag.jpg',
      },
      {
        name: 'Bathroom Essentials',
        description: 'Complete bathroom accessories set',
        price: 79.99,
        stock: 100,
        category: 'Home & Garden',
        imageUrl: '/images/bathroom-essentials.jpg',
      },
      {
        name: 'Apple Smartwatches',
        description: 'Latest Apple Watch with health monitoring',
        price: 249.99,
        stock: 75,
        category: 'Electronics',
        imageUrl: '/images/apple-watch.jpg',
      },
      {
        name: 'Gaming Accessories',
        description: 'Professional gaming peripherals bundle',
        price: 159.99,
        stock: 120,
        category: 'Electronics',
        imageUrl: '/images/gaming-accessories.jpg',
      },
    ]);

    console.log(`✅ Seeded ${products.length} products`);

    // Seed Customers
    const customerRepository = connection.getRepository(Customer);
    const customers = await customerRepository.save([
      {
        email: 'alice.smith@email.com',
        firstName: 'Alice',
        lastName: 'Smith',
        phone: '+1-555-1001',
        address: '123 Main St',
        city: 'New York',
        country: 'USA',
        satisfactionRating: 4.5,
        segment: 'loyal',
        totalSpent: 1250.50,
        totalOrders: 8,
      },
      {
        email: 'bob.johnson@email.com',
        firstName: 'Bob',
        lastName: 'Johnson',
        phone: '+1-555-1002',
        address: '456 Oak Ave',
        city: 'Los Angeles',
        country: 'USA',
        satisfactionRating: 3.8,
        segment: 'new',
        totalSpent: 89.99,
        totalOrders: 1,
      },
      {
        email: 'carol.williams@email.com',
        firstName: 'Carol',
        lastName: 'Williams',
        phone: '+1-555-1003',
        address: '789 Pine Rd',
        city: 'Chicago',
        country: 'USA',
        satisfactionRating: 4.2,
        segment: 'loyal',
        totalSpent: 2150.75,
        totalOrders: 15,
      },
    ]);

    console.log(`Seeded ${customers.length} customers`);

    // Seed Orders
    const orderRepository = connection.getRepository(Order);
    const orders = [];
    
    // Generate sample orders
    for (let i = 0; i < 50; i++) {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      const quantity = Math.floor(Math.random() * 5) + 1;
      const channels = ['online', 'offline'];
      const statuses = ['pending', 'processing', 'completed'];
      
      //@ts-ignore
       orders.push({
        quantity,
        unitPrice: randomProduct.price,
        totalPrice: randomProduct.price * quantity,
        channel: channels[Math.floor(Math.random() * channels.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)],
        customerId: randomUser.id,
        productId: randomProduct.id,
      });
    }

    await orderRepository.save(orders);
    console.log(` Seeded ${orders.length} orders`);

    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await app.close();
  }
}

// Run seeding if this file is executed directly
if (require.main === module) {
  seed();
}

export default seed;