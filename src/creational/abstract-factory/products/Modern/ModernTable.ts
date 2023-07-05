import { Table } from "../../interface/Table";

export class ModernTable implements Table {
  public size = "Medium";
  public color = "Graphite";
  public material = "Carbon Fiber";
  private style = "Modern";

  constructor(private quantity: Number) {
    this.quantity = quantity;
  }

  private getSize(): string {
    return this.size;
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

  private getQuantity(): Number {
    return this.quantity;
  }

  create(): Object {
    return {
      objectCreated: `${this.getStyle} Table`,
      color: this.getColor(),
      size: this.getSize(),
      material: this.getMaterial(),
      quantity: this.getQuantity(),
    };
  }
}
