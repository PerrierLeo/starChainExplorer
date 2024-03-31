<script setup>
import { ref } from 'vue'
import Block from '../models/block.model';
defineProps({
    block: Block,
})
const count = ref(0)
</script>
<template>
    <div class="border-solid border flex justify-between border-sky-500 min-w-0 p-5 rounded-md text-white">
        <div>
            <p class="text-lg">
                {{ block.number }}
            </p>
            <p class="text-sm">
                <timeago :datetime="block.date" />
            </p>
        </div>
        <div class="text-right">
            <p class="text-lg ">
                {{ block.transactions.length }} txns
            </p>
            <p class="text-sm">
                <timeago :datetime="block.date" />
            </p>
        </div>
    </div>
</template>
