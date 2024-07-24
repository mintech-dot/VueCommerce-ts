import { ref, computed } from "vue";
import { GetProductsDocument, type GetProductsQuery } from "../gql/graphql";


interface CartItem {
  productId: string;
  quantity: number;
  priceWithTax?: number;
}

export const useCart = () => {
  const CartItems = ref<CartItem[]>([]);
  const productsQuery =  useAsyncQuery<GetProductsQuery>(GetProductsDocument);

  const load = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const ProductInCartStorage = JSON.parse(
        localStorage.getItem("addtocart") || "[]"
      );
      CartItems.value = ProductInCartStorage;
    }
    
  };

  const save = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem("addtocart", JSON.stringify(CartItems.value));

    }
  };

  const getProductsInCart = () => {
    const allProducts = productsQuery.data.value?.products.items || [];
    return CartItems.value.map(cartItem => {
      const product = allProducts.find(product => product.id === cartItem.productId);
      return {
        ...product,
        quantity: cartItem.quantity,
        priceWithTax: product?.variants[0].priceWithTax,
      };
    }).filter(product => product !== undefined);
  };

  const searchProductsInCart = (searchTerm: string) => {
    const productsInCart = getProductsInCart();
    return productsInCart.filter((product) =>
      product.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const addToCart = (productId: string) => {
    const existingProduct = CartItems.value.find(
      (item) => item.productId === productId
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      CartItems.value.push({ productId, quantity: 1 });
    }

    save();
  };

  const removeProductfromCart = (productId: string) => {
    CartItems.value = CartItems.value.filter(
      (item) => item.productId !== productId
    );
    save();
  };
  const incrementQuantity = (productId: string) => {
    const product = CartItems.value.find(item => item.productId === productId);
    if (product) {
      product.quantity += 1;
      save();
    }
  };

  const multiplyQuantities = (multiplier: number, price : number) => {
    return (price * multiplier).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
  };

  const totalPrice = computed(() => {
    let total = 0
    const CartItems = getProductsInCart();
    CartItems.forEach(item => total += item.priceWithTax * item.quantity);
    return total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  });

  const decrementQuantity = (productId: string) => {
    const product = CartItems.value.find(item => item.productId === productId);
    if (product && product.quantity > 1) {
      product.quantity -= 1;
      save();
    } 
  };
  load();

  return {
    CartItems: computed(() => CartItems.value),
    addToCart,
    removeProductfromCart,
    getProductsInCart,
    searchProductsInCart,
    incrementQuantity,
    decrementQuantity,
    multiplyQuantities,
    totalPrice,
    save,
  };
};
