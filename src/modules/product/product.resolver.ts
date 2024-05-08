import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { OrderService } from './product.service';
import { Product } from '@entities/product.entity';

@Resolver((of) => Product)
export class OrderResolver {
  constructor(private orderService: OrderService) {}

  @Query((returns) => Product)
  async getProductById(@Args('id') id: string) {
    return await this.orderService.getProductById(id);
  }
}
