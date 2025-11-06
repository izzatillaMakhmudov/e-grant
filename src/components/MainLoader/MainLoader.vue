<script setup>
const { loading } = defineProps({
    loading: {
        type: Boolean,
        default: true
    }
});
</script>

<template>
    <div>
        <div class="main-loading" v-if="loading">
            <!-- <a-spin class="ant-spin-dot-item " size="large" /> -->
            <span>Jarayonda...</span>
        </div>
    </div>
</template>

<style>
.main-loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999999;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    grid-gap: 16px;
    width: 100%;
    min-height: 100vh;
    background: #FFFFFF;

    span {
        color: #414651;
        text-align: center;
        font-family: 'Inter-Medium', sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
    }
}

.ant-spin-dot-item {
    background-color: #17B26A !important;
}
</style>