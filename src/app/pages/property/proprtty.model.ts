export interface PropertyViewModel {
    id: string;
    title: string;
    description: string;
    price: number;
    propertyType: string;
    bedrooms: number;
    bathrooms: number; 
    status: string;
    yearBuilt:string;
    mapUrl: string;
    location: string; // e.g., "Bangkok, Thailand"
    facilities: string[]; // e.g., ['Pool', 'Gym', 'Parking']
    area: number; // in square meters
    address: string;
    province: string;
    district: string;
    subdistrict: string;
    images: imageModel[];
    createdAt: Date;
    updatedAt: Date;
}
export interface imageModel {
    url: string;
    title: string;
}