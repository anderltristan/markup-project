export interface IHotelListItem {
  name: string;
  code: number;
  price: number;
}

export interface IHotelData {
  name: string;
  description: string;
  details: IHotelDetails[];
  location: IHotelLocation;
  media: IHotelMedia[];
  phoneNumber: string;
  price: number;
  starRating: number;
}

export interface IHotelDetails {
  label: string;
  value: string;
}

export interface IHotelLocation {
  areaName: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  latitude: number;
  longitude: number;
}

export interface IHotelMedia {
  type: "productImage" | "productMap";
  href: string;
  width: number;
  height: number;
}