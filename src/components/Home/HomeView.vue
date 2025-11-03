<script setup lang="ts">
import HomeIcon from '../Icons/HomeIcon.vue';
import EyeIcon from '../Icons/EyeIcon.vue';
import OrgIcon from '../Icons/OrgIcon.vue';
import xMarkIcon from '../Icons/xMarkIcon.vue';
import graduationCapIcon from '../Icons/graduationCapIcon.vue';
import ArrowRight from '../Icons/ArrowRight.vue';

import { storeToRefs } from 'pinia';
import { useSidebarStore } from '../Sidebar/sidebarStore';
import ArrowDown from '../Icons/ArrowDown.vue';
import ArrowUp from '../Icons/ArrowUp.vue';
import CapIcon from '../Icons/CapIcon.vue';
import CaseIcon from '../Icons/CaseIcon.vue';
import PeopleIcon from '../Icons/PeopleIcon.vue';
import PortfelIcon from '../Icons/PortfelIcon.vue';
import UzbMap from '../Map/UzbMap.vue';

const sidebarStore = useSidebarStore()
const { isSidebarOpen } = storeToRefs(sidebarStore)

const orgNurbersInRegister = 214;
const orgsWithApplications = 721;
const applicationsAreasNumber = 721;
const demandNumber = 721;



</script>

<template>
    <div class="">
        <div class="breadcrumb">
            <p>
                <HomeIcon />
                <ArrowRight /> Asosiy
            </p>
            <h1 class="text-xl">Asosiy</h1>
        </div>
        <div :class="['konteyner', { open: isSidebarOpen }]">
            <div :class="['frame', 'radius-xl', { open: isSidebarOpen }]">
                <div class="card bg-white card1">
                    <div class="card-header">
                        <h3>Ehtiyoj bo'yicha statistika</h3>
                    </div>
                    <div class="frame-content grid grid-rows-2 grid-cols-2 gap-[25px] p-[25px]">
                        <div class="card p20px min-w-xs flex gap-[15px] ">
                            <span class="w-[40px] h-[40px] flex  rounded-md bg-blue-400">
                                <OrgIcon />
                            </span>
                            <div>
                                <h4 class="text-sm">Reestrdagi tashkilotlar soni</h4>
                                <h3 class="">{{ orgNurbersInRegister }}</h3>
                            </div>
                        </div>
                        <div class="card p20px min-w-xs flex gap-[15px]">
                            <span class="w-[40px] h-[40px] flex  rounded-md bg-green-500">
                                <graduationCapIcon />
                            </span>
                            <div>
                                <h4 class="text-sm">Ariza yuborgan tashkilotlar soni</h4>
                                <h3>{{ orgsWithApplications }}</h3>
                            </div>
                        </div>
                        <div class="card p20px min-w-xs flex gap-[15px]">
                            <span class="w-[40px] h-[40px] flex  rounded-md bg-purple-500">
                                <EyeIcon />
                            </span>
                            <div>
                                <h4 class="text-sm">Ariza yuborgan tashkilotlar soni</h4>
                                <h3>{{ applicationsAreasNumber }}</h3>
                            </div>
                        </div>
                        <div class="card p20px min-w-xs flex gap-[15px]">
                            <span class="w-[40px] h-[40px] flex  rounded-md bg-red-400">
                                <xMarkIcon />
                            </span>
                            <div>
                                <h4 class="text-sm">Buyurtma berilgan ehtiyoj soni</h4>
                                <h3>{{ demandNumber }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="widgets card bg-white">
                    <div class="widgets-header">
                        <div>
                            <h2>Buyurtma berilgan ehtiyojlar soni</h2>
                            <div class="widgets-hc">
                                <h1>4000</h1>
                                <span>-1.4%</span>
                                <p>O'tgan yilga nisbatan</p>
                            </div>
                        </div>
                        <div>
                            <button>Batafsil</button>
                        </div>
                    </div>
                    <div class="devider"></div>
                    <div class="widgets-content">
                        <div>
                            <h1>Yangi loyihalarni amalga oshirish hisobiga</h1>
                            <h2>1800</h2>
                            <div class="widgets-hc">
                                <h3>-3.2%</h3>
                                <ArrowDown />
                                <p>O’tgan yilga nisbatan</p>
                            </div>
                            <div class="line line1"></div>
                        </div>
                        <div class="line-v"></div>
                        <div>
                            <h1>Amalda mavjud quvvatlarni modernizatsiya qilish hisobiga</h1>
                            <h2>250</h2>
                            <div class="widgets-hc">
                                <h3>-6.4%</h3>
                                <ArrowDown />
                                <p>O’tgan yilga nisbatan</p>
                            </div>
                            <div class="line line2"></div>
                        </div>
                        <div class="line-v"></div>
                        <div>
                            <h1>Boshqa yo’nalishlar hisobiga ehtiyojlar soni</h1>
                            <h2>775</h2>
                            <div class="widgets-hc">
                                <h3>+0.8%</h3>
                                <ArrowUp />
                                <p>O’tgan yilga nisbatan</p>
                            </div>
                            <div class="line line3"></div>
                        </div>
                    </div>
                </div>

            </div>
            <div :class="['card1', 'map', 'radius-xl', 'card', 'bg-white', { open: isSidebarOpen }]">
                <div class="card-header">
                    <h3>Hududlar bo'yicha</h3>
                </div>

                <div class="map-content">
                    <div class="map-inside">
                        <UzbMap />
                    </div>
                </div>
            </div>
        </div>
        <div :class="['metric', 'konteyner', { open: isSidebarOpen }]">
            <div :class="['card']">
                <div class="card-header">
                    <h3>Bitiruvchi talabalar bo’yicha statistika</h3>
                </div>
                <div class="metric-content">
                    <div class="card flex gap-4">
                        <span class="w-[40px] h-[40px] flex  rounded-md bg-yellow-500">
                            <CapIcon />
                        </span>
                        <div class="flex flex-col gap-2">
                            <h1>Bitiruvchi talabalar talabalar soni</h1>
                            <div class="card inside">
                                <div class="span">
                                    <p>Ma’lumotlar shakllantirilmoqda</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card flex gap-4">
                        <span class="w-[40px] h-[40px] flex  rounded-md bg-teal-500">
                            <CaseIcon />
                        </span>
                        <div class="flex flex-col gap-2">
                            <h1>Ish joyiga ega bo‘lmagan talabalar</h1>
                            <div class="card inside">
                                <div class="span">
                                    <p>Ma’lumotlar shakllantirilmoqda</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="['card']">
                <div class="card-header">
                    <h3>Mehnat resurslari bo’yicha statistika</h3>
                </div>
                <div class="metric-content">
                    <div class="card flex gap-4">
                        <span class="w-[40px] h-[40px] flex  rounded-md bg-violet-500">
                            <PeopleIcon />
                        </span>
                        <div class="flex flex-col gap-2">
                            <h1>Rasman band bo‘lgan aholi</h1>
                            <div class="card inside">
                                <div class="span">
                                    <p>Ma’lumotlar shakllantirilmoqda</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card flex gap-4">
                        <span class="w-[40px] h-[40px] flex  rounded-md bg-orange-500">
                            <PortfelIcon />
                        </span>
                        <div class="flex flex-col gap-2">
                            <h1>Mavjud bo‘sh ish o‘rinlari</h1>
                            <div class="card inside">
                                <div class="span">
                                    <p>Ma’lumotlar shakllantirilmoqda</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.ctn {
    border: 1px solid black;
}



.konteyner {
    margin-top: 25px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    height: 697px;
    width: 100%;

    &.metric {
        height: 223px;

        .card {
            background-color: #fff;
        }
    }

    &:not(.open) {
        width: 1789px;

    }

    &.open {
        width: 1561px;
    }

    .frame {
        display: grid;
        gap: 25px;
        grid-template-columns: 1fr;
        grid-template-rows: 353px 320px;

        .frame-content {


            h3 {
                font-size: 30px;
                line-height: 38px;
                font-weight: 600;

            }
        }
    }

    .card1 {

        transition: all .4s ease;
        display: grid;
        grid-template-rows: 69px 284px;
    }


}

.card-header {
    border-bottom: 1px solid rgba(233, 234, 235, 1);
    display: flex;
    align-items: center;
    padding: 25px;

    h3 {
        font-weight: 600;
    }

    h4 {
        line-height: 20px;
    }
}

.card {
    

    span {
        color: #fff;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
        box-shadow: 0px 1px 2px 0px rgba(10, 13, 18, 0.05) inset,
            0px -2px 0px 0px rgba(10, 13, 18, 0.05) inset,
            0px 0px 0px 1px rgba(10, 13, 18, 0.18) inset;

        border: 2px solid;

        // border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%);


    }
}

.frame-content {
    padding: 25px;
}

.widgets {
    padding: 20px;

    .widgets-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    button {
        border: 1px solid rgba(233, 234, 235, 1);
        box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);
        padding: 4px 6px;
        border-radius: 8px;
        cursor: pointer;
        color: rgba(92, 92, 92, 1);
    }

    h2 {
        color: rgba(92, 92, 92, 1);
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
    }

    p {
        font-weight: 400;
        color: rgba(83, 88, 98, 1);
        font-size: 12px;
    }

    .widgets-hc {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 32px;
        gap: 12px;
        margin-top: 4px;

        h1 {
            font-size: 24px;
            color: rgba(23, 23, 23, 1);
            font-weight: 500;
        }

        span {
            background-color: rgba(255, 192, 197, 1);
            padding: 2px 8px;
            border-radius: 10px;
            color: rgba(104, 18, 25, 1);
            font-weight: 500px;
            font-size: 12px;
            border: none !important;
            outline: none;
        }
    }

    .devider {
        width: 100%;
        background-color: rgba(235, 235, 235, 1);
        height: 1px;
        margin: 20px 0;
    }

    .widgets-content {
        display: grid;
        grid-template-columns: 1fr 1px 1fr 1px 1fr;
        gap: 16px;

        h1 {

            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: rgba(92, 92, 92, 1);
        }

        h2 {
            color: rgba(23, 23, 23, 1);
            font-size: 20px;
            line-height: 28px;
            font-weight: 500;
            margin: 3px 0;
        }

        h3 {
            color: rgba(92, 92, 92, 1);
            font-size: 14px;
            line-height: 20px;
            font-weight: 500;
        }

        .widgets-hc {
            margin: 15px 0;

        }

        .line {
            width: 100%;
            height: 8px;
            border-radius: 1.5px;
        }

        .line1 {
            background-color: rgba(246, 181, 30, 1);
        }

        .line2 {
            background-color: rgba(41, 112, 255, 1);
        }

        .line3 {
            background-color: rgba(125, 82, 244, 1);
        }

        .line-v {
            width: 1px;
            height: 100%;
            border-left: 1px dashed rgba(209, 209, 209, 1);

        }
    }
}

.metric {
    .metric-content {
        display: grid;
        padding: 25px;
        gap: 25px;
        grid-template-columns: 1fr 1fr;

        .card {
            height: 106px;
            padding: 20px;

            h1 {
                font-size: 14px;
                line-height: 20px;
                font-weight: 600;
                color: rgba(83, 88, 98, 1);
            }
        }

        .card.inside {
            padding: 10px;
            width: 252px;
            height: 37px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            .span {
                width: 232px;
                height: 22px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: none;
                outline: none;
                background-color: rgba(240, 249, 255, 1);
            }

            p {
                font-size: 12px;
                line-height: 18px;
                color: rgba(2, 106, 162, 1);
                z-index: 4;
            }

        }


    }
}

.map {
    .map-content {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
        height: 628px;
        
        .map-inside{
            position: relative;
            height: 419px;
            color: rgba(23, 178, 106, 1);
            
        }
        
        button {
            cursor: pointer;

        }

        path {
            cursor: pointer;
        }
    }
}
</style>