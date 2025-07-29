class CreatePackageItemDto {
  itemName: string;
  quantity: number;
  unit: string;
  packageId: number;
  name: string;
  
}

export class CreatePackageDto {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  items: CreatePackageItemDto[];
}
