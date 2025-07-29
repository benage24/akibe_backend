import { Module } from '@nestjs/common';
import { PackagesService } from './packages.service';
import { PackagesController } from './packages.controller';
import { Package } from './entities/package.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackageItem } from './entities/package-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Package, PackageItem])],

  controllers: [PackagesController],
  providers: [PackagesService],
})
export class PackagesModule {}
