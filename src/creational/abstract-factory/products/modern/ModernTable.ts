import { Table } from "../../interfaces/products/Table";

export class ModernTable implements Table {
  public size = "Medium";
  public color = "Graphite";
  public material = "Carbon Fiber";
  private style = "Modern";

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

  create(quantity: number): Object {
    return {
      name: `${this.getStyle()} Table`,
      color: this.getColor(),
      size: this.getSize(),
      material: this.getMaterial(),
      quantity: quantity,
    };
  }
}
