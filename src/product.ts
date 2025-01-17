export interface Product {
    sku: string;
    name: string;
    price: number;
}

export const productCatalog: Product[] = [
    { sku: "ipd", name: "Super iPad", price: 549.99 },
    { sku: "mbp", name: "MacBook Pro", price: 1399.99 },
    { sku: "atv", name: "Apple TV", price: 109.5 },
    { sku: "vga", name: "VGA adapter", price: 30.0 },
];
