import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useApplicationStore = defineStore("applicationStore", () => {
  const allData = ref([
    {
      id: 1,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 2,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 3,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 4,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 5,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 6,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 7,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 8,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 9,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 10,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 11,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 12,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 13,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 14,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 15,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 16,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 17,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 18,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 19,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 20,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 21,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 22,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 23,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 24,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 25,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 1,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 2,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 3,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 4,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 5,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 6,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 7,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 8,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 9,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 10,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 11,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 12,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 13,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 14,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 15,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 16,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 17,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 18,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 310005256,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 19,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 20,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 21,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 22,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 23,
      OrgName:
        "WIUT",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 24,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 25,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 1,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 2,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 3,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 4,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 5,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 6,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 7,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 8,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 9,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 10,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 11,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 12,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 13,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 14,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 15,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 16,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 17,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 18,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 19,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 20,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 21,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 22,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 23,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 24,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 25,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 1,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 2,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 3,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 4,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 5,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 6,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 7,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 8,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 9,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 10,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 11,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 12,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 13,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 14,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 15,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 16,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 17,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 18,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 310005256,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 19,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 20,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 21,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 22,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 23,
      OrgName:
        "WIUT",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 24,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 25,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 1,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 2,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 3,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 4,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 5,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 6,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 7,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 8,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 9,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 10,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 11,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 12,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 13,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 14,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 15,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 16,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 17,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 18,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 19,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 20,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 21,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 22,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 23,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 24,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 25,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 1,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 2,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 3,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 4,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 5,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 6,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 7,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 8,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 9,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 10,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 11,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 12,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 13,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 14,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 15,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 16,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 17,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 18,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 310005256,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 19,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 20,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 21,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 22,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 23,
      OrgName:
        "WIUT",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 24,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
    {
      id: 25,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
    },
  ]);

  const searchQuery = ref("");
  const currentPage = ref(1);
  const perPage = ref(13);

  const filteredData = computed(() => {
    if (!searchQuery.value) return allData.value;
    return allData.value.filter(
      (item) =>
        item.OrgName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        String(item.STIR).includes(searchQuery.value)
    );
  });

  const totalPages = computed(() =>
    Math.ceil(filteredData.value.length / perPage.value)
  );

  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * perPage.value;
    const end = start + perPage.value;
    return filteredData.value.slice(start, end);
  });

  const setPage = (page) => {
    if (page >= 1 && page <= totalPages.value) currentPage.value = page;
  };
  const setSearch = (query) => {
    searchQuery.value = query;
    currentPage.value = 1;
  };

  return {
    allData,
    searchQuery,
    currentPage,
    perPage,
    filteredData,
    paginatedData,
    totalPages,
    setPage,
    setSearch,
  };
});
