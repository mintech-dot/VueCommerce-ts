import { GetProductsDocument, type GetProductsQuery } from "../gql/graphql";

interface CartItem {
  productId: string;
  quantity: number;
  priceWithTax?: number;
}

export const useCart = () => {
  const cartItems = ref<CartItem[]>([]);
  const productsQuery = useQuery<GetProductsQuery>(GetProductsDocument);

  const load = () => {
    if (import.meta.client) {
      const ProductInCartStorage = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );
      cartItems.value = ProductInCartStorage;
    }
  };

  const save = () => {
    if (import.meta.client) {
      localStorage.setItem("cart", JSON.stringify(cartItems.value));
    }
  };

  const getProductsInCart = () => {
    const allProducts = productsQuery.result.value?.products.items || [];
    return cartItems.value
      .map((cartItem) => {
        const product = allProducts.find(
          (product) => product.id === cartItem.productId
        );
        return {
          ...product,
          quantity: cartItem.quantity,
          priceWithTax: product?.variants[0].priceWithTax,
        };
      })
      .filter((product) => product !== undefined);
  };

  const searchProductsInCart = (searchTerm: string) => {
    const productsInCart = getProductsInCart();
    return productsInCart.filter((product) =>
      product.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const addToCart = (productId: string) => {
    const existingProduct = cartItems.value.find(
      (item) => item.productId === productId
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cartItems.value.push({ productId, quantity: 1 });
    }

    save();
  };

  const removeProductfromCart = (productId: string) => {
    cartItems.value = cartItems.value.filter(
      (item) => item.productId !== productId
    );
    save();
  };
  const incrementQuantity = (productId: string) => {
    const product = cartItems.value.find(
      (item) => item.productId === productId
    );
    if (product) {
      product.quantity += 1;
      save();
    }
  };

  const multiplyQuantities = (multiplier: number, price: number) => {
    return (price * multiplier).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const totalPrice = computed(() => {
    let total = 0;
    const cartItems = getProductsInCart();
    cartItems.forEach((item) => (total += item.priceWithTax * item.quantity));
    return total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  });

  const decrementQuantity = (productId: string) => {
    const product = cartItems.value.find(
      (item) => item.productId === productId
    );
    if (product && product.quantity > 1) {
      product.quantity -= 1;
      save();
    }
  };
  load();

  return {
    cartItems: computed(() => cartItems.value),
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
