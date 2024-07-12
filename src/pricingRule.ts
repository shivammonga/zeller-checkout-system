import { Product } from "./product";

export interface PricingRule {
    apply: (items: Product[]) => number;
}

const applyDiscounts = (items: Product[]): number => {
    const skuCounts: Record<string, number> = {};
    const skuPrices: Record<string, number> = {};
    let totalDiscount = 0;

    for (const item of items) {
        const { sku, price } = item;
        skuCounts[sku] = (skuCounts[sku] || 0) + 1;
        skuPrices[sku] = price;
    }

    Object.keys(skuCounts).forEach((sku) => {
        const count = skuCounts[sku];
        const price = skuPrices[sku];

        switch (sku) {
            case "atv":
                if (count >= 3) {
                    totalDiscount += Math.floor(count / 3) * price;
                }
                break;

            case "ipd":
                if (count > 4) {
                    totalDiscount += count * (price - 499.99);
                }
                break;
            default:
                break;
        }
    });

    return totalDiscount;
};

export const pricingRules: PricingRule[] = [
    {
        apply: (items: Product[]) => {
            return applyDiscounts(items);
        },
    },
];
