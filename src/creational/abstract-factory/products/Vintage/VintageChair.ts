import { Chair } from "../../interface/Chair";

export class VintageChair implements Chair {
  public material = "Solid Wood";
  public color = "Dark Brown";
  private style = "Vintage";

  constructor(private quantity: Number) {
    this.quantity = quantity;
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

  private getQuantity(): Number {
    return this.quantity;
  }

  create(): Object {
    return {
      objectCreated: `${this.getStyle} Chair`,
      color: this.getColor(),
      material: this.getMaterial(),
      quantity: this.getQuantity(),
    };
  }
}
