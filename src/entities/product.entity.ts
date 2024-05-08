import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field((type) => Float)
  price: number;

  @Field((type) => Int)
  quantity: number;

  @Field((type) => Date)
  createdAt: Date;

  deletedAt?: Date;

  @Field((type) => Date)
  updatedAt: Date;
}
