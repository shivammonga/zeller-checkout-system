import { Product } from "./product";
import { PricingRule } from "./pricingRule";

export class Checkout {
    private items: Product[] = [];
    private pricingRules: PricingRule[];

    constructor(pricingRules: PricingRule[]) {
        this.pricingRules = pricingRules;
    }

    scan(item: Product) {
        this.items.push(item);
    }

    total() {
        const totalWithoutDiscounts = this.items.reduce(
            (total, item) => total + item.price,
            0
        );
        const totalDiscounts = this.pricingRules.reduce(
            (total, rule) => total + rule.apply(this.items),
            0
        );
        return totalWithoutDiscounts - totalDiscounts;
    }
}
