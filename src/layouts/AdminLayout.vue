<script setup>

import Header from '@/components/Header/Header.vue';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import { useSidebarStore } from '@/components/Sidebar/sidebarStore';
import { storeToRefs } from 'pinia';
const sidebarStore = useSidebarStore()
const { isSidebarOpen } = storeToRefs(sidebarStore)
</script>

<template>

    <div :class="['ctn', { open: isSidebarOpen }]">
        <div class="sidebar">
            <Sidebar />
        </div>
        <div class="content">
            <Header />
            <main>
                <RouterView />
            </main>
        </div>
    </div>

</template>

<style scoped lang="scss">
.ctn {
    display: grid;
    height: 100vh;
    transition: all .4s ease;
    
    .content{
        overflow: hidden;
        grid-column-start: 2;    
        grid-column-end: 3;
        display: grid;
        grid-template-rows: 72px 1fr;
    }

    main{
        background-color: rgba(245, 245, 245, 1);
        padding: 25px;
        overflow: auto;
        display: block;
    }

    &.open {
        grid-template-columns: 296px 1fr;
    }

    &:not(.open) {
        grid-template-columns: 68px 1fr;
    }
}
</style>