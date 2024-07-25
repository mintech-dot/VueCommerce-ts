import { GetProductsDocument, type GetProductsQuery } from "../gql/graphql";

export const useWishlist = () => {
  const wishlistItems = ref<string[]>([]);
  const productsQuery = useAsyncQuery<GetProductsQuery>(GetProductsDocument);

  const load = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storageWishlist = JSON.parse(
        localStorage.getItem("wishlist") || "[]"
      );
      wishlistItems.value = storageWishlist;
    }
  };

  const save = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("wishlist", JSON.stringify(wishlistItems.value));
    }
  };

  const getProductsInWishlist = () => {
    const allProducts = productsQuery.data.value?.products.items || [];
    return allProducts.filter((product) =>
      wishlistItems.value.includes(product.id)
    );
  };

  const searchProductsInWishlist = (searchTerm: string) => {
    const productsInWishlist = getProductsInWishlist();
    return productsInWishlist.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const addProductToWhlist = (productId: string) => {
    if (!wishlistItems.value.includes(productId)) {
      wishlistItems.value.push(productId);
      save();
    }
  };

  const removeProductfromWishlist = (productId: string) => {
    wishlistItems.value = wishlistItems.value.filter((id) => id !== productId);
    save();
  };

  const isProductInWishlist = (productId: string) => {
    return wishlistItems.value.includes(productId);
  };

  load();

  return {
    wishlist: computed(() => wishlistItems.value),
    addProductToWhlist,
    removeProductfromWishlist,
    isProductInWishlist,
    getProductsInWishlist,
    searchProductsInWishlist,
    save,
  };
};
