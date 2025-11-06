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
      rejectionReason: "",
    },
    {
      id: 2,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 3,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "",
      refreshData: "23.05.2025",
      rejectionReason: "",
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
      rejectionReason: "",
    },
    {
      id: 5,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Tasdiqlangan",
      refreshData: "23.05.2025",
      rejectionReason: "",
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
      rejectionReason: "",
    },
    {
      id: 7,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Tasdiqlangan",
      refreshData: "23.05.2025",
      rejectionReason: "",
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
      rejectionReason: "",
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
      rejectionReason: "",
    },
    {
      id: 1,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 1,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "",
      refreshData: "23.05.2025",
      rejectionReason: "",
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
      rejectionReason: "",
    },
    {
      id: 3,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Tasdiqlangan",
      refreshData: "23.05.2025",
      rejectionReason: "",
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
      rejectionReason: "",
    },
    {
      id: 16,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Tasdiqlangan",
      refreshData: "23.05.2025",
      rejectionReason: "",
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
      rejectionReason: "",
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
      rejectionReason: "",
    },
    {
      id: 19,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 20,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "",
      refreshData: "23.05.2025",
      rejectionReason: "",
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
      rejectionReason: "",
    },
    {
      id: 22,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Tasdiqlangan",
      refreshData: "23.05.2025",
      rejectionReason: "",
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
      rejectionReason: "",
    },
    {
      id: 24,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Tasdiqlangan",
      refreshData: "23.05.2025",
      rejectionReason: "",
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
      rejectionReason: "",
    },
    {
      id: 26,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 27,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 28,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 29,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 30,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Tasdiqlangan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 31,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 32,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Tasdiqlangan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 33,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 34,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 35,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 36,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 37,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 38,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Tasdiqlangan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 39,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 40,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Tasdiqlangan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 41,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 42,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 43,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 44,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 45,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 46,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Tasdiqlangan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 47,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 48,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Tasdiqlangan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 49,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 50,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 51,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 52,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 53,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 54,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Tasdiqlangan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 55,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 56,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Tasdiqlangan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 57,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 58,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 59,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 60,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 61,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 62,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Tasdiqlangan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 63,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 64,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Tasdiqlangan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 65,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 66,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 67,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 68,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 69,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Rad etilgan",
      refreshData: "23.05.2025",
      rejectionReason: "",
    },
    {
      id: 70,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      RouteCount: 41,
      Status: "Tasdiqlangan",
      refreshData: "23.05.2025",
      rejectionReason: "",
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

  const changeStatus = (id, status, reason) => {
    const app = allData.value.find((a) => a.id === id);
    if (app) {
      app.Status = status;
      if (reason) {
        app.rejectionReason = reason;
        console.log("reason: ", app.rejectionReason, "id: ", id);
      }
    }
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
    changeStatus,
  };
});
