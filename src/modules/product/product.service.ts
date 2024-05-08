import { ClientGrpc } from '@nestjs/microservices';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';

import {
  PRODUCT_PACKAGE_NAME,
  PRODUCT_SERVICE_NAME,
  ProductServiceClient,
} from 'src/proto/product';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OrderService implements OnModuleInit {
  private productService: ProductServiceClient;

  constructor(@Inject(PRODUCT_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.productService =
      this.client.getService<ProductServiceClient>(PRODUCT_SERVICE_NAME);
  }

  async getProductById(id: string) {
    return await lastValueFrom(this.productService.findOne({ id: id }));
  }
}
