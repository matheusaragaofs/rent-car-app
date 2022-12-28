import { InternalServerErrorException } from '@nestjs/common/exceptions/internal-server-error.exception';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Car } from './car';
import { CarsService } from './cars.service';
import { NewCarInput } from './dto/new-car-input';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => [Car])
  public async cars(): Promise<Car[]> {
    try {
      const cars = await this.carsService.getAllCars();
      return cars;
    } catch (error) {
      console.log('error =>>>', error);
    }
  }

  @Mutation((returns) => Car)
  public async addNewCar(
    @Args('newCarData') newCarData: NewCarInput,
  ): Promise<Car> {
    return await this.carsService.addCar(newCarData).catch((err) => {
      throw err;
    });
  }
}
