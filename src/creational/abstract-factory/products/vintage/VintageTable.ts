import { Table } from "../../interfaces/products/Table";

export class VintageTable implements Table {
  public size = "Large";
  public color = "Dark Brown";
  public material = "Solid Wood";
  private style = "Vintage";

  private getSize(): string {
    return this.size;
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
      name: `${this.getStyle()} Table`,
      color: this.getColor(),
      size: this.getSize(),
      material: this.getMaterial(),
      quantity: quantity,
    };
  }
}
