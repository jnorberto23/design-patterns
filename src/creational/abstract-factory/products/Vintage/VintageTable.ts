import { Table } from "../../interface/Table";

export class VintageTable implements Table {
  public size = "Large";
  public color = "Dark Brown";
  public material = "Solid Wood";
  private style = "Vintage";

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
