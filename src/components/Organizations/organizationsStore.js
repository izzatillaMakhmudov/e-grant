import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useOrganizationStore = defineStore("organizationStore", () => {
  const allData = ref([
    {
      id: 1,
      OrgName:
        "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
      STIR: 201230002,
      DemandCount: 120,
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
      Hudud: "Samarqand viloyati",
      Vakolati: "nimadir",
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
