<template>
    <div class="table-footer flex items-center justify-center space-x-4 mt-4">
        <!-- Prev -->
        <button @click="$emit('prev')" :disabled="currentPage === 1"
            class="card px-3 py-2 rounded-xl text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed">
            ‹ Oldingi
        </button>

        <!-- Numbered pages -->
        <span>
            <button v-for="page in visiblePages" :key="page" @click="goToPage(page)" :disabled="page === '...'" :class="[
                'px-4 py-2 rounded-xl font-medium transition-all',
                page === currentPage
                    ? 'bg-gray-100 text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50',
                page === '...' ? 'cursor-default' : ''
            ]">
                {{ page }}
            </button>
        </span>

        <!-- Next -->
        <button @click="$emit('next')" :disabled="currentPage === totalPages"
            class="card px-3 py-2 rounded-xl text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed">
            Keyingi ›
        </button>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    currentPage: { type: Number, required: true },
    totalPages: { type: Number, required: true }
})

const emit = defineEmits(['update:page', 'prev', 'next'])

const visiblePages = computed(() => {
    const total = props.totalPages
    const current = props.currentPage
    const pages = []
    if (total <= 7) {
        for (let i = 1; i <= total; i++) pages.push(i)
    } else {
        if (current <= 4) {
            pages.push(1, 2, 3, 4, 5, '...', total)
        }
        else if (current >= total - 3) {
            pages.push(1, '...', total - 4, total - 3, total - 2, total - 1, total)
        }
        else {
            pages.push(1, '...', current - 1, current, current + 1, '...', total)
        }
    }

    return pages
})


function goToPage(page) {
    if (page === '...' || page < 1 || page > props.totalPages) return
    emit('update:page', page)
}
</script>

<style scoped lang="scss">
button {
    height: 40px;
    width: 100px;
    cursor: pointer;
}

span {
    button {
        width: 40px;
        cursor: pointer;
    }
}
</style>
