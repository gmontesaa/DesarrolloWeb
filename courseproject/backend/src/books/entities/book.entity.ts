import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  category: string;
  @Column({ type: 'real' })
  price: number;
  @Column()
  stock: number;
}
