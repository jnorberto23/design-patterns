import { Chair } from "../../interfaces/products/Chair";

export class VintageChair implements Chair {
  public material = "Solid Wood";
  public color = "Dark Brown";
  private style = "Vintage";

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
      name: `${this.getStyle()} Chair`,
      color: this.getColor(),
      material: this.getMaterial(),
      quantity:quantity,
    };
  }
}
