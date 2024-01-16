export const renderImageById = (id: String, imageDefault?: string) => {
  if (!id) return imageDefault || "/dettaulg.ts";
  const domain = process.env. CMS_API_URL || "https://cms.malayoga.vn";
  return domain + "/assets/" + id;
};