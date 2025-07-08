// src/app/models/location.model.ts
export interface Province {
  id: string;
  name_th: string;
  name_en: string;
}

export interface District {
  id: string;
  provinceCode: string;
  name_th: string;
  name_en: string;
}

export interface Subdistrict {
  id: string;
  provinceCode: string;
  districtCode: string;
  name_th: string;
  name_en: string;
}
