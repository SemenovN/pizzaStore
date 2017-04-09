import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const MenuPage = resolve => require(['./pages/MenuPage.vue'], resolve);
const CartPage = resolve => require(['./pages/CartPage.vue'], resolve);
const ProfilePage = resolve => require(['./pages/ProfilePage.vue'], resolve);
const PromotionsPage = resolve => require(['./pages/PromotionsPage.vue'], resolve);
const HomePage = resolve => require(['./pages/HomePage.vue'], resolve);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage },
        { path: '/HomePage', component: HomePage, name: 'Ресторан' },
        { path: '/MenuPage', component: MenuPage, name: 'Меню' },
        { path: '/CartPage', component: CartPage, name: 'Корзина' },
        { path: '/ProfilePage', component: ProfilePage, name: 'Кабинет' },
        { path: '/PromotionPage', component: PromotionsPage, name: 'Акции' }
    ]
});

export default router