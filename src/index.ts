import { Checkout } from "./checkout";
import { productCatalog } from "./product";
import { pricingRules } from "./pricingRule";

const checkoutObj = new Checkout(pricingRules);
checkoutObj.scan(productCatalog.find((p) => p.sku === "atv")!);
checkoutObj.scan(productCatalog.find((p) => p.sku === "atv")!);
checkoutObj.scan(productCatalog.find((p) => p.sku === "vga")!);
checkoutObj.scan(productCatalog.find((p) => p.sku === "atv")!);
console.log(`Total expected: $${checkoutObj.total().toFixed(2)}`); // Total expected: $249.00

const checkoutObj1 = new Checkout(pricingRules);
checkoutObj1.scan(productCatalog.find((p) => p.sku === "atv")!);
checkoutObj1.scan(productCatalog.find((p) => p.sku === "ipd")!);
checkoutObj1.scan(productCatalog.find((p) => p.sku === "ipd")!);
checkoutObj1.scan(productCatalog.find((p) => p.sku === "atv")!);
checkoutObj1.scan(productCatalog.find((p) => p.sku === "ipd")!);
checkoutObj1.scan(productCatalog.find((p) => p.sku === "ipd")!);
checkoutObj1.scan(productCatalog.find((p) => p.sku === "ipd")!);
console.log(`Total expected: $${checkoutObj1.total().toFixed(2)}`); // Total expected: $2718.95
