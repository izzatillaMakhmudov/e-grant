<script setup>
import ArrowRight from '../Icons/ArrowRight.vue';
import ArrowLeft from '../Icons/ArrowLeft.vue';
import { useSidebarStore } from '../Sidebar/sidebarStore';
import { storeToRefs } from 'pinia';

const sidebarStore = useSidebarStore()

console.log("sidebar store: ", sidebarStore)

const { isSidebarOpen } = storeToRefs(sidebarStore)

console.log("isOpen: ", isSidebarOpen)

function tuggleSidebar() {
    sidebarStore.tuggleSidebar()
}

</script>

<template>
    <button @click="tuggleSidebar" :class="[{ open: isSidebarOpen }]">
        <ArrowLeft :class="['icon', { open: isSidebarOpen }]" />
    </button>
</template>

<style scoped lang="scss">
button {
    top: 21px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    outline: none;
    position: absolute;
    color: #17b36a;

    cursor: pointer;
    transition: translate .4s ease;

    :hover {
        transform: scale(1.2);
    }

    .icon {
        cursor: pointer;
        transition: all .8s ease;
        transform-origin: center;

        :hover {
            transform: scale(1);
        }

        &:not(.open) {
            transform: rotateZ(180deg);

        }

    }

    &:not(.open) {
        left: 70px;
    }

    &.open {
        left: 255px;
    }
}
</style>