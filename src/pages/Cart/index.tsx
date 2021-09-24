/* eslint-disable no-useless-concat */
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { useCart } from '../../hooks/useCart';

import { PageTitle } from '../../components/PageTitle';
import { ShippingBanner } from '../../components/ShippingBanner';

import { ProductData } from '../../types';
import { formatPrice } from '../../utils/format';

import { 
  ShoppingCartContainer,
  EmptyCart,
  ProductContainer, 
  ProductTable,
  Total 
} from './styles';
import { Content, Section } from '../../styles/global';

export function Cart() {
  const { cart, removeProduct, updateProductAmount } = useCart();

  const cartFormatted = cart.map(product => ({
    ...product, 
    priceFormated: formatPrice(product.price), 
    subTotal: formatPrice(product.price * product.amount),
  }))

  const total = formatPrice(cart.reduce((sumTotal, product) => {
    sumTotal += product.price * product.amount;

    return sumTotal;
  }, 0));

  const handleProductIncrement = (product: ProductData) => {
    const incrementArguments = {
      productId: product.id,
      amount: product.amount + 1
    };

    updateProductAmount(incrementArguments);
  }

  const handleProductDecrement = (product: ProductData) => {
    const decrementArguments = {
      productId: product.id,
      amount: product.amount - 1
    };

    updateProductAmount(decrementArguments);
  }

  const handleRemoveProduct = (productId: number) => {
    removeProduct(productId);
  }

  const message = `Olá Barber Shop, desejo comprar os seguintes produtos: 
    Quantidade/Produto: ${cart.map(cartItem => ` ${cartItem.amount} ` + ` ${cartItem.productName}`)} 
  `;

  return (
    <>
      <PageTitle 
        path="cart"
        pageName="Carrinho de compras"
      />

      <Section whiteBackground>
        <Content>
          {cartFormatted.length === 0 ? (
            <EmptyCart>
              <div>
                <FaShoppingCart size={24} />

                <strong>O seu carrinho está vazio.</strong>
              </div>

              <p>Confira nossos produtos</p>

              <Link to="/shop">
                Ver produtos
              </Link>
            </EmptyCart>
          ) : (
            <ShoppingCartContainer>
              <ProductContainer>
                <ProductTable>
                  <thead>
                    <tr>
                      <th aria-label="product-image" />
                      <th>PRODUTO</th>
                      <th>QTD</th>
                      <th>SUBTOTAL</th>
                      <th aria-label="delete icon" />
                    </tr>
                  </thead>
                  <tbody>
                    {cartFormatted.map(product => (
                      <tr data-test-id="product" key={product.id}>
                        <td>
                          <img src={product.productImage} alt={product.productName} />
                        </td>
                        <td>
                          <strong>{product.productName}</strong>
                          <span>{product.priceFormated}</span>
                        </td>
                        <td>
                          <div>
                            <button
                              type="button"
                              data-testid="decrement-product"
                              disabled={product.amount <= 1}
                              onClick={() => handleProductDecrement(product)}
                            >
                              <MdRemoveCircleOutline size={20} />
                            </button>
                            <input 
                              type="text" 
                              data-testid="product-amount"
                              readOnly
                              value={product.amount}
                            />
                            <button
                              type="button"
                              data-testid="increment-product"
                              onClick={() => handleProductIncrement(product)}
                            >
                              <MdAddCircleOutline size={20} />
                            </button>
                          </div>
                        </td>
                        <td>
                          <strong>{product.subTotal}</strong>
                        </td>
                        <td>
                          <button
                            type="button"
                            data-testid="remove-product"
                            onClick={() => handleRemoveProduct(product.id)}
                          >
                            <MdDelete size={20} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </ProductTable>
              </ProductContainer>

              <footer>
                <p>
                  * Todos os produtos são vendidos através do WhatsApp, 
                  certifique-se de que os produtos desejados estejam no carrinho,
                  bem como a quantidade desejada de cada um. Em seguida clique
                  no botão abaixo para concluir a compra.
                </p>

                <div>
                  <a 
                    href={`https://api.whatsapp.com/send?phone=${5514991663957}&text=${message}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp size={24} />

                    Finalizar pedido
                  </a>

                  <Total>
                    <span>TOTAL</span>
                    <strong>{total}</strong>
                  </Total>
                </div>
              </footer>
            </ShoppingCartContainer>
          )}
        </Content>
      </Section>

      <ShippingBanner />
    </>
  );
}