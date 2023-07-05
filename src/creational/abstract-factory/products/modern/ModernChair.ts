import { Chair } from "../../interfaces/products/Chair";

export class ModernChair implements Chair {
  public material = "Chrome Steel";
  public color = "Chrome";
  private style = "Modern";

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
      quantity: quantity,
    };
  }
}
