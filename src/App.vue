<script setup>
import { storeToRefs } from 'pinia';
// import { useCore } from "./stores/core.pinia";
import { useCore } from './stores/core.pinia';
import MainLoader from '@/components/MainLoader/MainLoader.vue';
const core = useCore();
const { loaderMain } = storeToRefs(core);

</script>

<template>
  <MainLoader :loading="loaderMain" />
  <RouterView />
</template>

<style scoped></style>