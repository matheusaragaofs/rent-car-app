import { apolloClient } from "../../graphql";
import { GetCars, GetCars_cars } from "../__generated__/GetCars";
import { GET_ALL_CARS } from "./queries";

class CarService {
  public async getCars(): Promise<GetCars | undefined> {
    const response = await apolloClient
      .query({
        query: GET_ALL_CARS,
      })
      .catch((err) => {
        throw err;
      });
    if (response && response.data) return response.data;
  }
}

export default new CarService();
