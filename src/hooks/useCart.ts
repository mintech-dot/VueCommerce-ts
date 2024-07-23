import { ref, computed } from "vue";
import { GetProductsDocument, GetProductsQuery } from "../gql/graphql";
import { useQuery } from "@vue/apollo-composable";

const productsQuery = useQuery<GetProductsQuery>(GetProductsDocument);

export const useCart = () => {
  const CartItems = ref<string[]>([]);

  const load = () => {
    const ProductInCartStorage = JSON.parse(
      localStorage.getItem("addtocart") || "[]"
    );
    CartItems.value = ProductInCartStorage;
  };

  const save = () => {
    localStorage.setItem("addtocart", JSON.stringify(CartItems.value));
  };

  const getProductsInCart = () => {
    const allProducts = productsQuery.result.value?.products.items || [];
    return allProducts.filter((product) =>
      CartItems.value.includes(product.id)
    );
  };

  const searchProductsInCart = (searchTerm: string) => {
    const productsInCart = getProductsInCart();
    return productsInCart.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const addToCart = (productId: string) => {
    if (!CartItems.value.includes(productId)) {
      CartItems.value.push(productId);
      save();
    }
  };

  const removeProductfromCart = (productId: string) => {
    CartItems.value = CartItems.value.filter((id) => id !== productId);
    save();
  };


  load();

  return {
    AddToCart: computed(() => CartItems.value),
    addToCart,
    removeProductfromCart,
    getProductsInCart,
    searchProductsInCart,
    save,
  };
};
