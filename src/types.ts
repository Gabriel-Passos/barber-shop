export interface ProductData {
  id: number;
  inPromotion: boolean;
  description: string;
  productImage: string;
  productName: string;
  price: number;
  oldPrice: number;
  promotionPrice: number;
  promotionValue: number;
  amount: number;
}

export interface Stock {
  id: number;
  amount: number;
}