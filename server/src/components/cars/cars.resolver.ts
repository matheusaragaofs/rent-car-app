import { InternalServerErrorException } from '@nestjs/common/exceptions/internal-server-error.exception';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Car } from './car';
import { CarsService } from './cars.service';
import { NewCarInput } from './dto/new-car-input';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => String)
  public async cars(): Promise<any> {
    return await this.carsService.getAllCars().catch((err) => {
      console.log('err', err);
      throw err;
    });
  }

  @Mutation((returns) => Car)
  public async addNewCar(
    @Args('newCarDadata') newCarData: NewCarInput,
  ): Promise<Car> {
    return await this.carsService.addCar(newCarData).catch((err) => {
      throw err;
    });
  }
}
