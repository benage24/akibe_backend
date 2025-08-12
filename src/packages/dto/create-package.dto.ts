class CreatePackageItemDto {
  itemName: string;
  quantity: number;
  unit: number;
  packageId: number;
  name: string;
  price: number;
}

export class CreatePackageDto {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  items: CreatePackageItemDto[];
}
