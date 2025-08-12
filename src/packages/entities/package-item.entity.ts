import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Package } from './package.entity';

@Entity()
// package-item.entity.ts
@Entity()
export class PackageItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // e.g., "Apple"

  @Column()
  quantity: number;
  @Column()
  unit: number;
  @Column()
  price: number;

  @ManyToOne(() => Package, (pkg) => pkg.items, { onDelete: 'CASCADE' })
  package: Package;
}
