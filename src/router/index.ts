import { createRouter, createWebHistory } from 'vue-router';
import whishlist from '../pages/Whishlit.vue'; 
import cartlist from '../pages/CartList.vue';
import productlisting from '../pages/ProductListing.vue'; 

// Define your routes
const routes = [
  {
    path: '/',
    name: 'productlisting',
    component: productlisting,
  },
  {
    path: '/whishlist',
    name: 'whishlist',
    component: whishlist,
  },
  {
    path: '/cart',
    name: 'cartlist',
    component: cartlist,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
