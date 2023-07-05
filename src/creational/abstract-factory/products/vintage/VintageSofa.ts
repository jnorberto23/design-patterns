import { Sofa } from "../../interfaces/products/Sofa";

export class VintageSofa implements Sofa {
  public seats = 6;
  public color = "Dark Brown";
  public material = "Leather";
  private style = "Vintage";

  private getSeats(): Number {
    return this.seats;
  }

  private getColor(): string {
    return this.color;
  }

  private getMaterial(): string {
    return this.material;
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
