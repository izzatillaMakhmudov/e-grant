<template>
    <svg width="722" height="420" viewBox="0 0 722 420" fill="none" xmlns="http://www.w3.org/2000/svg">

        <defs>
            <linearGradient id="hoverGradient" x1="1.66402" y1="221.75" x2="221.993" y2="15.5342"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#074D31" />
                <stop offset="1" stop-color="#079455" />
            </linearGradient>
        </defs>

        <path v-for="(p, i) in paths" :key="i" :d="p.path"
            :fill="hoverIndex === i ? 'url(#hoverGradient)' : defaultColor" stroke="#E9EAEB" stroke-width="1.2"
            @mouseenter="hoverIndex = i" @mouseleave="hoverIndex = null" style="transition: fill 0.3s ease;" />
    </svg>

    <div :class="['map-card', hoverIndex !== null ? 'active' : '']">
        <div class="header">
            <h1>{{ hoverIndex !== null ? paths[hoverIndex].region : '' }} viloyati</h1>
        </div>
        <div></div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import paths from "./mapPath";

const hoverIndex = ref(null);
const defaultColor = "#17B26A";

</script>

<style scoped lang="scss">
svg {
    margin: 0 auto;

    path {
        cursor: pointer;
    }
}

.map-card {
    display: none;
    width: 251px;
    height: 128px;
    border-radius: 12px;
    box-shadow: 0px 4px 26.7px 0px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    position: absolute;
    top: -40px;
    right: 10px;

    &.active {
        display: block;
    }


    .header {
        height: 36px;
        border-bottom: 1px solid var(--colors-gray-light-mode-200, rgba(233, 234, 235, 1));
        background: var(--colors-gray-light-mode-100, rgba(245, 245, 245, 1));
        color: rgba(0, 0, 0, 1);
        align-items: center;
        justify-content: flex-start;
        display: flex;
        padding: 8px 16px;

        h1 {
            font-weight: 500;
            font-size: 14px;
            text-transform: capitalize;
        }

    }
}
</style>
