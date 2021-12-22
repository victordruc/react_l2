import Client from "./Client";
import Product from "./Product";
import Money from "../types/Money";

class Order {
  constructor(
    private id: string,
    private product: Product,
    private quantity: any,
    private total: Money,
    private client: Client
  ) {}
}

export default Order;