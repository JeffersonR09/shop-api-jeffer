import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'text', unique: true })
  title: string;

  @Column({ type: 'numeric', unique: true })
  price?: number;

  @Column({ type: 'text', unique: true })
  description?: string;

  @Column({ type: 'text', unique: true })
  slug?: string;

  @Column({ type: 'numeric', default: 0, unique: true })
  stock: number;

  @Column({ type: 'text' })
  gender: string;
}
