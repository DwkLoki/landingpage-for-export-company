import {
  artisanProductSlugs,
  artisanProductsMeta,
  type ArtisanProductSlug,
} from "~/data/artisan-products";

export interface ArtisanProduct {
  slug: ArtisanProductSlug;
  image: string;
  hsCode: string;
  name: string;
  description: string;
  ingredients: string;
  shelfLife: string;
  benefits: string;
  uses: string;
  legality: string;
  moq: string;
  packaging: string;
  paymentSystem: string;
}

export function useArtisanProducts() {
  const { t } = useI18n();

  function isValidSlug(slug: string): slug is ArtisanProductSlug {
    return artisanProductSlugs.includes(slug as ArtisanProductSlug);
  }

  function getProduct(slug: ArtisanProductSlug): ArtisanProduct {
    const meta = artisanProductsMeta[slug];
    const prefix = `content.product.${meta.i18nKey}`;

    return {
      slug,
      image: meta.image,
      hsCode: meta.hsCode,
      name: t(`${prefix}.name`),
      description: t(`${prefix}.description`),
      ingredients: t(`${prefix}.ingredients`),
      shelfLife: t(`${prefix}.shelfLife`),
      benefits: t(`${prefix}.benefits`),
      uses: t(`${prefix}.uses`),
      legality: t(`${prefix}.legality`),
      moq: t(`${prefix}.moq`),
      packaging: t(`${prefix}.packaging`),
      paymentSystem: t(`${prefix}.paymentSystem`),
    };
  }

  function getAllProducts(): ArtisanProduct[] {
    return artisanProductSlugs.map((slug) => getProduct(slug));
  }

  return {
    artisanProductSlugs,
    isValidSlug,
    getProduct,
    getAllProducts,
  };
}
