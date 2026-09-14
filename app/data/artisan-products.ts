import bpomLogo from "~/assets/images/bpom.png";
import halalLogo from "~/assets/images/halal.svg";
import iso9001Logo from "~/assets/images/iso-9001.png";
import pirtLogo from "~/assets/images/pirt.png";
import sniLogo from "~/assets/images/sni.png";

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

export type ArtisanProductCertification = {
  name: string;
  logo: string;
};

export type ArtisanProductMeta = {
  i18nKey: ArtisanProductI18nKey;
  image: string;
  hsCode: string;
  certifications: ArtisanProductCertification[];
};

export const artisanProductsMeta: Record<
  ArtisanProductSlug,
  ArtisanProductMeta
> = {
  "palm-sugar-powder": {
    i18nKey: "firstProduct",
    image: product1,
    hsCode: "1702.90",
    certifications: [
      {
        name: "ISO 9001",
        logo: iso9001Logo,
      },
      {
        name: "Halal",
        logo: halalLogo,
      },
      {
        name: "P-IRT",
        logo: pirtLogo,
      },
      {
        name: "SNI",
        logo: sniLogo,
      },
    ],
  },
  "shredded-tuna": {
    i18nKey: "secondProduct",
    image: product2,
    hsCode: "1604.14",
    certifications: [
      {
        name: "BPOM",
        logo: bpomLogo,
      },
      {
        name: "Halal",
        logo: halalLogo,
      },
      {
        name: "P-IRT",
        logo: pirtLogo,
      },
      {
        name: "SNI",
        logo: sniLogo,
      },
    ],
  },
  "mackerel-fish-crackers": {
    i18nKey: "thirdProduct",
    image: product3,
    hsCode: "1904.90",
    certifications: [
      {
        name: "BPOM",
        logo: bpomLogo,
      },
      {
        name: "Halal",
        logo: halalLogo,
      },
      {
        name: "P-IRT",
        logo: pirtLogo,
      },
      {
        name: "SNI",
        logo: sniLogo,
      },
    ],
  },
  "passion-fruit-beverage": {
    i18nKey: "fourthProduct",
    image: product4,
    hsCode: "2202.99",
    certifications: [
      {
        name: "BPOM",
        logo: bpomLogo,
      },
      {
        name: "Halal",
        logo: halalLogo,
      },
      {
        name: "P-IRT",
        logo: pirtLogo,
      },
      {
        name: "SNI",
        logo: sniLogo,
      },
    ],
  },
};
