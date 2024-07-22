import { ref, computed } from "vue";

export const useWishlist = () => {
  const wishlistItems = ref<string[]>([]);

  const load = () => {
    const storageWishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );
    wishlistItems.value = storageWishlist;
  };

  const save = () => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems.value));
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
    save,
  };
};
