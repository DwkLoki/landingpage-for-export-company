import blackPepper from "~/assets/images/black-pepper.jpg";
import whitePepper from "~/assets/images/white-pepper.png";
import cloves from "~/assets/images/cloves.jpeg";
import arecaNut from "~/assets/images/areca-nut.jpeg";
import turmeric from "~/assets/images/turmeric.jpg";
import nutmeg from "~/assets/images/nutmeg.jpeg";

export const rawProductSlugs = [
  "black-pepper",
  "white-pepper",
  "cloves",
  "areca-nut",
  "turmeric",
  "nutmeg",
] as const;

export type RawProductSlug = (typeof rawProductSlugs)[number];

export type RawProductI18nKey =
  | "blackPepper"
  | "whitePepper"
  | "cloves"
  | "arecaNut"
  | "turmeric"
  | "nutmeg";

export const rawProductsMeta: Record<
  RawProductSlug,
  { i18nKey: RawProductI18nKey; image: string; hsCode: string }
> = {
  "black-pepper": {
    i18nKey: "blackPepper",
    image: blackPepper,
    hsCode: "0904.11",
  },
  "white-pepper": {
    i18nKey: "whitePepper",
    image: whitePepper,
    hsCode: "0904.12",
  },
  cloves: {
    i18nKey: "cloves",
    image: cloves,
    hsCode: "0907.10",
  },
  "areca-nut": {
    i18nKey: "arecaNut",
    image: arecaNut,
    hsCode: "0802.50",
  },
  turmeric: {
    i18nKey: "turmeric",
    image: turmeric,
    hsCode: "0910.30",
  },
  nutmeg: {
    i18nKey: "nutmeg",
    image: nutmeg,
    hsCode: "0908.11",
  },
};
