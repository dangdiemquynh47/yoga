export const renderImageById = (id: String, imageDefault?: string) => {
  if (!id) return imageDefault || "/dettaulg.ts";
  const domain = process.env.CMS_API_URL;
  return domain + "/assets/" + id;
};

export const companyNameHTN = { vi: "NHT", en: "NHT", id: "NHT" };
export const companyNameHT = { vi: "XNK Hưng Thịnh", en: "XNK Hung Thinh", id: "XNKHungThinh" };
export const companyName: any = process.env.COMPANY === "NHT" ? companyNameHTN : companyNameHT;
