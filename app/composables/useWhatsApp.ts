export function useWhatsApp() {
  const config = useRuntimeConfig();

  const whatsappNumber = computed(() =>
    String(config.public.whatsappNumber).replace(/\D/g, ""),
  );

  function buildWhatsAppUrl(message?: string) {
    const baseUrl = `https://wa.me/${whatsappNumber.value}`;
    const normalizedMessage = message?.trim();

    return normalizedMessage
      ? `${baseUrl}?text=${encodeURIComponent(normalizedMessage)}`
      : baseUrl;
  }

  return {
    whatsappNumber,
    buildWhatsAppUrl,
  };
}
