<script setup>
import { ref } from 'vue'
import Transaction from '../models/transactions.model';
defineProps({
    transaction: Transaction,
})
const count = ref(0)
</script>
<template>
    <div class="border-solid border flex justify-between border-sky-500 min-w-0 p-5 rounded-md text-white">
        <div>
            <p class="text-lg truncate w-12">
                {{ transaction.hash }}
            </p>
            <p class="text-sm">
                <timeago :datetime="transaction.metadata" />
            </p>
        </div>
        <div class="text-right">
            <p class="text-lg">
                {{ transaction.from }}
            </p>

            <p class="text-sm">
                {{ transaction.to }}
            </p>
        </div>
    </div>
</template>
