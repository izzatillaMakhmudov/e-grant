<template>
    <div class="breadcrumb">
        <p>
            <ApplicationIcon />
            <ArrowRight /> Arizalar
        </p>
        <h1 class="text-xl">Arizalar</h1>
    </div>




    <div class="table-container card">
        <div class="my-4 flex justify-between items-center table-top">
            <input v-model="store.searchQuery" type="text" placeholder="Izlash..." class="card" />
            <button class="card">
                <FiltrIcon /> Filtr
            </button>
        </div>
        <table class="table">
            <thead>
                <tr class="h-[48px]">
                    <th class="w-[64px]">№</th>
                    <th class="w-[499px]">Tashkilot nomi</th>
                    <th class="w-[149px]">STIR</th>
                    <th class="w-[150px]">Ehtiyoj soni</th>
                    <th class="w-[149px]">Yo'nalishlar soni</th>
                    <th class="w-[237px]">Holati</th>
                    <th class="w-[156px]">Yangilangan sana</th>
                    <th class="w-[156px]"></th>
                </tr>
            </thead>
            <tbody>
                <tr class="h-[54px]" v-for="(data, index) in store.paginatedData" :key="data.id">
                    <td class="text-center">{{ (store.currentPage - 1) * store.perPage + index + 1 }}</td>
                    <td class="text-left">{{ data.OrgName }}</td>
                    <td class="text-center">{{ data.STIR }}</td>
                    <td class="text-center">{{ data.DemandCount }}</td>
                    <td class="text-center">{{ data.RouteCount }}</td>
                    <td class="text-center">{{ data.Status }}</td>
                    <td class="text-center">{{ data.refreshData }}</td>
                    <td class="text-center"></td>
                </tr>
            </tbody>
        </table>

        <Pagination :current-page="store.currentPage" :total-pages="store.totalPages" @update:page="setPage"
            @prev="store.setPage(store.currentPage - 1)" @next="store.setPage(store.currentPage + 1)" />

        <!-- <div class="table-footer">
            <button @click="store.setPage(store.currentPage - 1)" :disabled="store.currentPage === 1" class="card">
                ‹ Oldingi
            </button>

            <span> {{ store.currentPage }} / {{ store.totalPages }} </span>

            <button @click="store.setPage(store.currentPage + 1)" :disabled="store.currentPage === store.totalPages"
                class="card">
                Keyingi ›
            </button>
        </div> -->
    </div>
</template>

<style scoped lang="scss">

</style>

<script setup>
import ApplicationIcon from '../Icons/ApplicationIcon.vue';
import ArrowRight from '../Icons/ArrowRight.vue';
import FiltrIcon from '../Icons/FiltrIcon.vue';
import MagnifierIcon from '../Icons/MagnifierIcon.vue';

import Pagination from '../Pagination.vue';

import { useApplicationStore } from './applicationsStore';
const store = useApplicationStore();

function setPage(page) {
    if (page >= 1 && page <= store.totalPages) {
        store.currentPage = page
    }
}

</script>