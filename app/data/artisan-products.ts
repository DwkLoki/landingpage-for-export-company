import product1 from "~/assets/images/product-1.jpg";
import product2 from "~/assets/images/product-2.jpg";
import product3 from "~/assets/images/product-3.jpg";
import product4 from "~/assets/images/product-4.jpg";

export const artisanProductSlugs = [
  "palm-sugar-powder",
  "shredded-tuna",
  "mackerel-fish-crackers",
  "passion-fruit-beverage",
] as const;

export type ArtisanProductSlug = (typeof artisanProductSlugs)[number];

export type ArtisanProductI18nKey =
  | "firstProduct"
  | "secondProduct"
  | "thirdProduct"
  | "fourthProduct";

export const artisanProductsMeta: Record<
  ArtisanProductSlug,
  { i18nKey: ArtisanProductI18nKey; image: string; hsCode: string }
> = {
  "palm-sugar-powder": {
    i18nKey: "firstProduct",
    image: product1,
    hsCode: "1702.90",
  },
  "shredded-tuna": {
    i18nKey: "secondProduct",
    image: product2,
    hsCode: "1604.14",
  },
  "mackerel-fish-crackers": {
    i18nKey: "thirdProduct",
    image: product3,
    hsCode: "1904.90",
  },
  "passion-fruit-beverage": {
    i18nKey: "fourthProduct",
    image: product4,
    hsCode: "2202.99",
  },
};
