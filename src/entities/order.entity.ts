import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Product } from './product.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  unitPrice: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalPrice: number;

  @Column({ type: 'enum', enum: ['online', 'offline'], default: 'online' })
  channel: string;

  @Column({ type: 'enum', enum: ['pending', 'processing', 'completed', 'cancelled'], default: 'pending' })
  status: string;

  @ManyToOne(() => User, user => user.orders)
  customer: User;

  @Column()
  customerId: number;

  @ManyToOne(() => Product, product => product.orders)
  product: Product;

  @Column()
  productId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}