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
                    <td :class="['text-center', {
                        'text-approved': data.Status === 'Tasdiqlangan',
                        'text-rejected': data.Status === 'Rad etilgan',
                        'text-awaiting': data.Status === ''
                    }]">
                        <span>{{ data.Status }}</span>
                        <div>
                            <button class="approve" @click="setApproved(data.id)">Tasdiqlash</button>
                            <button class="deny" @click="toggleActive()">Rad qilish</button>
                        </div>
                    </td>
                    <td class="text-center">{{ data.refreshData }}</td>
                    <td class="text-center"></td>
                </tr>
            </tbody>
        </table>

        <div :class="['bg', { active: isActive }]">
            <div class="addOrg">
                <div class="header_section">
                    <button @click="toggleActive()">
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
td {


    span {
        padding: 2px 8px;
        height: 22px;
        border-radius: 11px;
    }

    button {
        display: none;
    }

    &.text-approved {
        color: rgba(6, 118, 71, 1);
        font-weight: 500;

        span {
            background-color: rgba(236, 253, 243, 1);
            border: 1px solid rgba(171, 239, 198, 1);
        }
    }

    &.text-rejected {
        color: rgba(180, 35, 24, 1);
        font-weight: 500;

        span {
            background-color: rgba(254, 243, 242, 1);
            border: 1px solid rgba(254, 205, 202, 1);
        }
    }

    &.text-awaiting {
        grid-template-columns: 1fr 1fr;
        background-color: transparent;
        align-items: center;
        justify-content: center;

        padding: 0;

        span {
            display: none;
        }

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;

        }

        button {
            padding: 8px 12px;
            display: flex;
            font-weight: 600;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            cursor: pointer;
            height: 36px;
        }

        .approve {
            background-color: rgba(23, 178, 106, 1);
            color: #fff;
            width: 102px;
            border: 2px solid;

            box-shadow: 0px 1px 2px 0px rgba(10, 13, 18, 0.05) inset,
                0px -2px 0px 0px rgba(10, 13, 18, 0.05) inset,
                0px 0px 0px 1px rgba(10, 13, 18, 0.18) inset;
        }

        .deny {
            background-color: #fff;
            color: rgba(145, 32, 24, 1);
            width: 92px;
            height: 34px;
            border: 1px solid var(--Component-colors-Components-Buttons-Secondary-error-button-secondary-error-border, rgba(253, 162, 155, 1));
            box-shadow: 0px 1px 2px 0px rgba(10, 13, 18, 0.05) inset,
                0px -2px 0px 0px rgba(10, 13, 18, 0.05) inset,
                0px 0px 0px 1px rgba(10, 13, 18, 0.18) inset;
        }
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


}
</style>

<script setup>
import ApplicationIcon from '../Icons/ApplicationIcon.vue';
import ArrowRight from '../Icons/ArrowRight.vue';
import FiltrIcon from '../Icons/FiltrIcon.vue';
import MagnifierIcon from '../Icons/MagnifierIcon.vue';
import { ref } from 'vue';

import Pagination from '../Pagination.vue';

import { useApplicationStore } from './applicationsStore';
const store = useApplicationStore();

const isActive = ref(false)

function setPage(page) {
    if (page >= 1 && page <= store.totalPages) {
        store.currentPage = page
    }
}

function setApproved(id) {
    store.changeStatus(id, 'Tasdiqlangan');
}
function toggleActive() {
    isActive.value = !isActive.value
    console.log(isActive.value);
}

</script>