import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Max(20000)
  @Min(1500)
  @Field((type) => Int)
  monthlyPrice: number;

  @Max(1000)
  @Min(10, { message: 'Daily Price can not be that low'})
  @Field((type) => Int)
  dailyPrice: number;

  @Field()
  mileage: string;

  @Field()
  gas: string;

  @Field()
  gearType: string;

  @Field()
  thumbnailUrl: string;
}
