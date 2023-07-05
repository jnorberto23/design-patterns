export interface Chair {
  material: string;
  color: string;
  create: (quantity: number) => Object;
}
