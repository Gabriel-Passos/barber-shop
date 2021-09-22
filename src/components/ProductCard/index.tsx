import { useCart } from '../../hooks/useCart';

import { Container, Promotion, Button } from './styles';

interface ProductCardProps {
  id: number;
  inPromotion?: boolean;
  promotionValue?: number;
  productImage: string;
  productName: string;
  oldPrice?: number;
  price?: number;
  promotionPrice?: number;
}

export function ProductCard({ 
  id,
  inPromotion = false, 
  promotionValue,
  productImage,
  productName,
  oldPrice,
  price,
  promotionPrice 
}: ProductCardProps) {
  const { showProduct } = useCart();

  return (
    <Container>
      {inPromotion && <Promotion>- {promotionValue}%</Promotion>}

      <Button type="button" onClick={() => showProduct(id)}>
        <img 
          src={productImage} 
          alt={productName} 
          loading="lazy" 
        />
      </Button>

      <div>
        <Button type="button" onClick={() => showProduct(id)}>
          {productName}
        </Button>

        <div>
          {inPromotion ? (
            <>
              <span>R$ {oldPrice}</span>
              <span className="promotion-price">
                R$ {promotionPrice}
              </span>
            </>
          ) : (
            <span>R$ {price}</span>
          )}
        </div>
      </div>
    </Container>
  );
}