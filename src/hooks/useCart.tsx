import { createContext, ReactNode, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { api } from '../services/api';

import { ProductData, Stock } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: ProductData[];
  productId: number;
  showProduct: (productId: number) => void;
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [productId, setProductId] = useState<number>(Number);

  const [cart, setCart] = useState<ProductData[]>(() => {
    const storagedCart = localStorage.getItem('@BarberShop:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const history = useHistory();

  const showProduct = (productId: number) => {
    setProductId(productId);

    history.push('/product');
  }

  const addProduct = async (productId: number) => {
    try {
      const productInCart = cart.find(product => product.id === productId);

      if (!productInCart) {
        const productInStock: Stock = (await api.get<Stock>(`stock/${productId}`)).data;
        const productApi: ProductData = (await api.get<ProductData>(`products/${productId}`)).data;

        if (productInStock.amount > 0) {
          setCart([...cart, {...productApi, amount: 1}]);
          localStorage.setItem('@BarberShop:cart', JSON.stringify([...cart, {...productApi, amount: 1}]));
          toast.success('Produto adicionado ao carinho');
          return;
        }
      }

      if (productInCart) {
        const productInStock: Stock = (await api.get<Stock>(`stock/${productId}`)).data;

        if (productInStock.amount > productInCart.amount) {
          const updatedCart = cart.map(cartItem => cartItem.id === productId
            ? {...cartItem, amount: Number(cartItem.amount) + 1}
            : cartItem
          );

          setCart(updatedCart);
          localStorage.setItem('@BarberShop:cart', JSON.stringify(updatedCart));
          toast.info('Produto atualizado no carrinho');
        } else {
          toast.error('Quantidade solicitada fora de estoque');
        }
      }
    } catch {
      toast.error('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const productExists = cart.some(cartProduct => cartProduct.id === productId);
      if (!productExists) {
        toast.error('Erro na remoção do produto');
        return;
      }

      const updatedCart = cart.filter(cartItem => cartItem.id !== productId);
      setCart(updatedCart);
      localStorage.setItem('@BarberShop:cart', JSON.stringify(updatedCart));
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount < 1) {
        toast.error('Erro na alteração de quantidade do produto');
        return;
      }

      const response = await api.get(`stock/${productId}`);
      const productAmount = response.data.amount;
      const stockIsNotAvailable = amount > productAmount;

      if (stockIsNotAvailable) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }

      const productExists = cart.some(cartProduct => cartProduct.id === productId);
      if (!productExists) {
        toast.error('Erro na alteração de quantidade do produto');
        return;
      }

      const updatedCart = cart.map(cartItem => cartItem.id === productId
        ? {...cartItem, amount: amount}
        : cartItem
      );

      setCart(updatedCart);
      localStorage.setItem('@BarberShop:cart', JSON.stringify(updatedCart));
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ 
        cart, 
        productId, 
        showProduct, 
        addProduct, 
        removeProduct, 
        updateProductAmount 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}