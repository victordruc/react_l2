import Money from "../types/Money";

class Product {
  constructor(
    private name: string,
    private imageURL: string[],
    private price: Money
  ) {}
}

export default Product;