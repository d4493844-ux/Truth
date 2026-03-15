import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { products as mockProducts, getProductsByCategory } from '../lib/mockData';

export const useProducts = (category = null) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        let query = supabase.from('products').select('*');
        if (category) query = query.eq('category', category);
        const { data, error } = await query;
        if (error) throw error;
        setProducts(data?.length ? data : getProductsByCategory(category));
      } catch {
        setProducts(getProductsByCategory(category));
        setError(null);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [category]);

  return { products, loading, error };
};

export const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('products').select('*').eq('id', id).single();
        if (error) throw error;
        setProduct(data || mockProducts.find(p => p.id === id));
      } catch {
        setProduct(mockProducts.find(p => p.id === id));
      } finally {
        setLoading(false);
      }
    };
    if (id) fetch();
  }, [id]);

  return { product, loading };
};
