/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Package } from './entities/package.entity';
import { PackageItem } from './entities/package-item.entity';

@Injectable()
export class PackagesService {
  packageRepository: any;

  constructor(
    @InjectRepository(Package)
    private packageRepo: Repository<Package>,
    @InjectRepository(PackageItem)
    private packageItemRepo: Repository<PackageItem>,
  ) {}


  create(createPackageDto: CreatePackageDto) {
    const data = {
      name: createPackageDto.name,
      items: createPackageDto.items.map((item) => ({
        name: item.name,
        quantity:item.quantity,
        unit:item.unit,
        price:item.price
      })),
    };
    const packageEntity = this.packageRepo.create(data);

    return this.packageRepo.save(packageEntity);
  }



  async createPackageItem(
    createPackageDto: CreatePackageDto,
  ): Promise<PackageItem> {
    const item = this.packageItemRepo.create(createPackageDto);
    return this.packageItemRepo.save(item);
  }

  findAll() {
    return this.packageRepo.find({ relations: ['items'] });
  }

   async findOne(id: number) {
    const pkg=await this.packageRepo.findOne({where:{id}});
    if(!pkg){
       throw new NotFoundException('Package not found')
    }
    return pkg
  }

  update(id: number, updatePackageDto: UpdatePackageDto) {
    return `This action updates a #${id} package`;
  }

  async remove(id: number) {
    const pkg=await this.packageRepo.findOne({where:{id}});
    if(!pkg){
       throw new NotFoundException('Package not found')
    }
    return this.packageRepo.remove(pkg)
  }
}
