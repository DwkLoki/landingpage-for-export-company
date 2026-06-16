import {
  rawProductSlugs,
  rawProductsMeta,
  type RawProductSlug,
} from "~/data/raw-products";

export interface RawProductSpecification {
  label: string;
  value: string;
}

export interface RawProduct {
  slug: RawProductSlug;
  image: string;
  hsCode: string;
  name: string;
  description: string;
  moq: string;
  packaging: string;
  paymentSystem: string;
  advantages: string[];
  specifications: RawProductSpecification[];
}

export function useRawProducts() {
  const { t, tm, rt } = useI18n();

  function isValidSlug(slug: string): slug is RawProductSlug {
    return rawProductSlugs.includes(slug as RawProductSlug);
  }

  function getProduct(slug: RawProductSlug): RawProduct {
    const meta = rawProductsMeta[slug];
    const prefix = `content.productRaw.${meta.i18nKey}`;

    const specifications = tm(`${prefix}.specifications`) as Array<{
      label: string;
      value: string;
    }>;

    const advantages = tm(`${prefix}.advantages`) as string[];

    return {
      slug,
      image: meta.image,
      hsCode: meta.hsCode,
      name: t(`${prefix}.name`),
      description: t(`${prefix}.description`),
      moq: t(`${prefix}.moq`),
      packaging: t(`${prefix}.packaging`),
      paymentSystem: t(`${prefix}.paymentSystem`),
      advantages: advantages.map((adv) => rt(adv)),
      specifications: specifications.map((spec) => ({
        label: rt(spec.label),
        value: rt(spec.value),
      })),
    };
  }

  function getAllProducts(): RawProduct[] {
    return rawProductSlugs.map((slug) => getProduct(slug));
  }

  return {
    rawProductSlugs,
    isValidSlug,
    getProduct,
    getAllProducts,
  };
}
