<script setup>
import ApplicationIcon from '../Icons/ApplicationIcon.vue';
import EduIcon from '../Icons/EduIcon.vue';
import ENetworkIcon from '../Icons/eNetworkIcon.vue';
import HelpIcon from '../Icons/HelpIcon.vue';
import HomeIcon from '../Icons/HomeIcon.vue';
import OrgIcon from '../Icons/OrgIcon.vue';
import RoleIcon from '../Icons/RoleIcon.vue';
import SettingsIcon from '../Icons/SettingsIcon.vue';
import UniIcon from '../Icons/UniIcon.vue';
import TuggleButton from '../TuggleButton/TuggleButton.vue';
import { useSidebarStore } from './sidebarStore';
import { storeToRefs } from 'pinia';
import egrantIcon from '../Icons/egrantIcon.vue';

const sidebarStore = useSidebarStore()
const { isSidebarOpen } = storeToRefs(sidebarStore)

</script>

<template>
    <div :class="['sidebar', { open: isSidebarOpen }]">
        <nav>
            <div>
                <img src="../../assests/images/logo-white.png" alt="">
                <egrantIcon class="logo" />
                <RouterLink class="link" to="/home">
                    <HomeIcon class="icon" /> <span>Asosiy</span>
                </RouterLink>
                <RouterLink class="link" to="/applications">
                    <ApplicationIcon /> <span>Arizalar</span>
                </RouterLink>
                <RouterLink class="link" to="/organizations">
                    <OrgIcon /> <span>Tashkilotlar</span>
                </RouterLink>
                <RouterLink class="link" to="/enetwork">
                    <ENetworkIcon /><span>Iqtisodiy tarmoqlar</span>
                </RouterLink>
                <RouterLink class="link" to="/eareas">
                    <EduIcon /><span>Ta'lim yo'nalishlari</span>
                </RouterLink>
                <RouterLink class="link" to="/universities">
                    <UniIcon /> <span>Universitetlar</span>
                </RouterLink>
                <RouterLink class="link" to="/roles">
                    <RoleIcon /> <span>Rollar</span>
                </RouterLink>
            </div>
            <div>
                <RouterLink class="link" to="/settings">
                    <SettingsIcon /> <span>Sozlamalar</span>
                </RouterLink>
                <RouterLink class="link" to="/help">
                    <HelpIcon /> <span>Yordam</span>
                </RouterLink>
            </div>
            <TuggleButton />
        </nav>


    </div>
</template>

<style scoped lang="scss">
.sidebar {
    box-sizing: border-box;
    width: 296px;
    height: 100vh;
    background-color: rgba(12, 14, 18, 1);
    color: #fff;
    transition: all .4s ease;

    img {
        margin-bottom: 10px;
    }

    nav {


        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
        padding: 25px 0;

        div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }

    .logo {
        margin: 0 auto 15px;
    }

    .link {
        height: 40px;
        padding: 10px;
        color: #fff;
        text-decoration: none;
        display: flex;
        background-color: transparent;
        align-items: center;
        border-radius: 8px;
        transition: all .4s ease;

        span {
            margin-left: 10px;
        }
    }

    .link.active {
        background-color: rgba(34, 38, 47, 1);
    }

    &:not(.open) {


        width: 68px;

        .logo {
            display: block;
        }

        .link {
            justify-content: center;
            width: 40px;
        }

        span {
            display: none;
        }

        img {
            display: none;
        }
    }

    &.open {
        .logo {
            display: none;
        }

        nav {
            padding: 25px;
        }

        .link {
            width: 272px;

            justify-content: flex-start;
        }

        span {
            display: block;
        }

        img {
            display: block;
            width: 97px;
        }
    }
}
</style>