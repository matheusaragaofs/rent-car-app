import { Query, Resolver } from '@nestjs/graphql';
import { Car } from './car';
import { CarsService } from './cars.service';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => String)
  public async cars(): Promise<Car[]> {
    return await this.carsService.getAllCars().catch((err)  => {
      throw err;
    });
  }
}
