import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/components/Home/HomeView.vue";
import Applications from "@/components/Applications/Applications.vue";
import EconomicNetworks from "@/components/EconomicNetworks/EconomicNetworks.vue";
import EducationAreas from "@/components/EducationAreas/EducationAreas.vue";
import Help from "@/components/Help/Help.vue";
import Organizations from "@/components/Organizations/Organizations.vue";
import Roles from "@/components/Roles/Roles.vue";
import Settings from "@/components/Settings/Settings.vue";
import Universities from "@/components/Universities/Universities.vue";
import App from "@/App.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      component: AuthLayout,
      name: "AuthLayout",
    },
    {
      path: "/",
      name: "MainLayout",
      redirect: "/home",
      component: AdminLayout,
      children: [
        { path: "/home", component: HomeView },
        { path: "/applications", component: Applications },
        { path: "/organizations", component: Organizations },
        { path: "/enetwork", component: EconomicNetworks },
        { path: "/eareas", component: EducationAreas },
        { path: "/universities", component: Universities },
        { path: "/roles", component: Roles },
        { path: "/settings", component: Settings },
        { path: "/help", component: Help },
      ],
    },
  ],
  linkExactActiveClass: "active",
});

export default router;
