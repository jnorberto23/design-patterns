export interface Sofa {
    seats: number;
    color: string;
    material: string;
    create: (quantity: number) => Object;
}
