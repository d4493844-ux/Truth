import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        i => i.id === action.payload.id &&
             i.colorway === action.payload.colorway &&
             i.size === action.payload.size
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id &&
            i.colorway === action.payload.colorway &&
            i.size === action.payload.size
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          ),
        };
      }
      return { ...state, items: [...state.items, action.payload] };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          i => !(i.id === action.payload.id &&
                 i.colorway === action.payload.colorway &&
                 i.size === action.payload.size)
        ),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload.id &&
          i.colorway === action.payload.colorway &&
          i.size === action.payload.size
            ? { ...i, quantity: Math.max(1, action.payload.quantity) }
            : i
        ),
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};

const getInitialState = () => {
  try {
    const saved = localStorage.getItem('truth_cart');
    return saved ? JSON.parse(saved) : { items: [] };
  } catch {
    return { items: [] };
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, getInitialState());

  useEffect(() => {
    localStorage.setItem('truth_cart', JSON.stringify(state));
  }, [state]);

  const addItem = (item) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeItem = (id, colorway, size) => dispatch({ type: 'REMOVE_ITEM', payload: { id, colorway, size } });
  const updateQuantity = (id, colorway, size, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, colorway, size, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items: state.items, addItem, removeItem, updateQuantity, clearCart, subtotal, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
