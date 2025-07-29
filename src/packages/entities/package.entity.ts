import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PackageItem } from './package-item.entity';

@Entity()
export class Package {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  imageUrl: string;

  @OneToMany(() => PackageItem, (item) => item.package, { cascade: true })
  items: PackageItem[];
}
