import { Sofa } from "../../interfaces/products/Sofa";

export class ModernSofa implements Sofa {
  public seats = 4;
  public color = "Graphite";
  public material = "Silicone Fiber";
  private style = "Modern";

  private getSeats(): Number {
    return this.seats;
  }

  private getColor(): string {
    return this.color;
  }

  private getMaterial(): string {
    return this.color;
  }


  private getStyle(): string {
    return this.style;
  }


  create(quantity: number): Object {
    return {
      name: `${this.getStyle()} Sofa`,
      color: this.getColor(),
      seats: this.getSeats(),
      material: this.getMaterial(),
      quantity: quantity,
    };
  }
}
