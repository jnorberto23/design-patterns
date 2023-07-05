import { Sofa } from "../../interface/Sofa";

export class VintageSofa implements Sofa {
  public seats = 6;
  public color = "Dark Brown";
  public material = "Leather";
  private style = "Vintage";

  constructor(private quantity: Number) {
    this.quantity = quantity;
  }

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

  private getQuantity(): Number {
    return this.quantity;
  }

  create(): Object {
    return {
      objectCreated: `${this.getStyle} Sofa`,
      color: this.getColor(),
      seats: this.getSeats(),
      material: this.getMaterial(),
      quantity: this.getQuantity(),
    };
  }
}
