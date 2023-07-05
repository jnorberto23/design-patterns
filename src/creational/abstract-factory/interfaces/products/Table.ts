export interface Table {
    material: string;
    color: string;
    size: string;
    create: (quantity: number) => Object;
}
