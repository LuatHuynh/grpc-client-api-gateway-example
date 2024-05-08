import { join } from 'path';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { config } from '@config';
import { OrderService } from './product.service';
import { OrderResolver } from './product.resolver';
import { PRODUCT_PACKAGE_NAME } from 'src/proto/product';

@Module({
  providers: [OrderService, OrderResolver],
  imports: [
    ClientsModule.register([
      {
        name: PRODUCT_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          package: PRODUCT_PACKAGE_NAME,
          protoPath: join(__dirname, '../../../proto/product.proto'),
          url: config.PRODUCT_SERVICE_URL,
        },
      },
    ]),
  ],
})
export class ProductModule {}
