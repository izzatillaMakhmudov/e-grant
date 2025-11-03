<script setup lang="ts">
import ArrowRight from '../Icons/ArrowRight.vue';
import OrgIcon from '../Icons/OrgIcon.vue';
import FiltrIcon from '../Icons/FiltrIcon.vue';
import MagnifierIcon from '../Icons/MagnifierIcon.vue';
import { ref } from 'vue';
import Pagination from '../Pagination.vue';

import { useOrganizationStore } from './organizationsStore';
import XMarIconNoCircle from '../Icons/xMarIconNoCircle.vue';
const store = useOrganizationStore();

const isActive = ref(false)
function setPage(page) {
    if (page >= 1 && page <= store.totalPages) {
        store.currentPage = page
    }
}
function toggleActive() {
    isActive.value = !isActive.value
}
</script>

<template>
    <div class="breadcrumb">
        <div>
            <p>
                <OrgIcon />
                <ArrowRight /> Tashkilotlar
            </p>
            <h1 class="text-xl">Tashkilotlar</h1>
        </div>
        <button class="addButton orgButtonGreenShadow" @click="toggleActive()">Tashkilot qo'shish</button>

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
                    <th class="w-[610px]">Tashkilot nomi</th>
                    <th class="w-[281px]">STIR</th>
                    <th class="w-[201px]">Hudud</th>
                    <th class="w-[281px]">Vakolati</th>
                    <th class="w-[123px]"></th>
                </tr>
            </thead>
            <tbody>
                <tr class="h-[54px]" v-for="(data, index) in store.paginatedData" :key="data.id">
                    <td class="text-center">{{ (store.currentPage - 1) * store.perPage + index + 1 }}</td>
                    <td class="text-left">{{ data.OrgName }}</td>
                    <td class="text-center">{{ data.STIR }}</td>
                    <td class="text-center">{{ data.Hudud }}</td>
                    <td class="text-center">{{ data.Vakolati }}</td>
                    <td class="text-center"></td>
                </tr>
            </tbody>
        </table>

        <Pagination :current-page="store.currentPage" :total-pages="store.totalPages" @update:page="setPage"
            @prev="store.setPage(store.currentPage - 1)" @next="store.setPage(store.currentPage + 1)" />

    </div>

    <div :class="['bg', { active: isActive }]">
        <div class="addOrg">
            <div class="header_section">
                <button @click="toggleActive()">
                    <XMarIconNoCircle />
                </button>
                <h1>Tashkilot qo'shish</h1>
            </div>
            <div class="addOrg_body">
                <label for="orgTin">STIR</label>
                <input type="text" placeholder="Kiriting" id="orgTin">
                <button class="search orgButtonGreenShadow">Izlash</button>
                <label for="orgName">Tashkilot nomi</label>
                <input type="text" placeholder="" id="orgName">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.breadcrumb {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.addButton {
    height: 40px;
    width: 177px;
    padding: 10px 14px;


}



.bg {
    opacity: 0;
    pointer-events: none;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .4);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 8;
    transition: all .9s ease-in-out;

    .addOrg {

        position: absolute;
        height: calc(100vh - 40px);
        top: 20px;
        right: -600px;
        width: 559px;
        background-color: #fff;
        border-radius: 8px;
        z-index: 9;
        padding: 32px;
        transition: all 0.9s ease-in-out;


        .header_section {
            display: flex;
            align-items: center;
            gap: 15px;
            justify-content: flex-start;
            margin-bottom: 30px;

            button {
                cursor: pointer;
                width: 48px;
                height: 48px;
                border-radius: 8px;
                background-color: #000;
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;

            }

            h1 {
                font-size: 30px;
                color: rgba(16, 24, 40, 1);
                font-weight: 600;
            }
        }

        .addOrg_body {
            button {
                height: 40px;
                width: 72px;


            }

            input {
                width: 100%;
                height: 40px;
                border: 1px solid rgba(245, 245, 245, 1);
                box-shadow: 0px 1px 2px 0px rgba(10, 13, 18, 0.05);
                padding: 0px 14px;
                border-radius: 8px;
                margin: 10px 0;
            }

            h2 {
                font-weight: 500;
                font-size: 14px;
                text-transform: uppercase;
                // margin-top: 30px;
                display: block;
            }
        }
    }

    &.active {
        opacity: 1;
        pointer-events: auto;
        transition: all .9s ease-in-out;

        .addOrg {

            right: 20px;
            transition: all 0.9s ease-in-out;
        }
    }
}
</style>