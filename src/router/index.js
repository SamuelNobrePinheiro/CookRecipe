// ROTA DE NAVEGAÇÃO // 
import {createRouter, createWebHistory} from "vue-router"
import Home from "../views/Home.vue"
import New_Recipe from "../views/New_Recipe.vue"
import Recipes from "../views/Recipes.vue"
import Profile from "../views/Profile.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/NovaReceita",
            name: "NovaReceita",
            component: New_Recipe,
        },
        {
            path: "/Receitas",
            name: "Receitas",
            component: Recipes,
        },
        {
            path: "/Perfil",
            name: "Perfil",
            component: Profile,
        }
    ]
})

export default router