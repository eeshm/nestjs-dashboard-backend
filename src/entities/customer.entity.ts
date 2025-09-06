import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  country: string;

  @Column({ type: 'decimal', precision: 3, scale: 1, nullable: true })
  satisfactionRating: number;

  @Column({ type: 'enum', enum: ['new', 'loyal', 'churned'], default: 'new' })
  segment: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  totalSpent: number;

  @Column({ default: 0 })
  totalOrders: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}